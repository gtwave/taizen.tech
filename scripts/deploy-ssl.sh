#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -lt 2 ]; then
  echo "Uso: $0 user@host /caminho/para/app [branch]"
  echo "Ex: $0 deploy@meuservidor.com /var/www/taizen main"
  exit 1
fi

TARGET="$1"
APP_DIR="$2"
BRANCH="${3:-main}"
APP_NAME="taizen-consulting"

SSH_OPTS="-o StrictHostKeyChecking=accept-new"

echo "Iniciando deploy: branch=$BRANCH -> $TARGET:$APP_DIR"

ssh $SSH_OPTS "$TARGET" bash -s <<EOF
set -e
cd "$APP_DIR"

# Atualiza código
git fetch --all --prune
git checkout "$BRANCH"
git reset --hard "origin/$BRANCH"

# Build e run com Docker no servidor
docker build -t "$APP_NAME:latest" .

# Para container existente
if docker ps -a --format '{{.Names}}' | grep -q "^$APP_NAME$"; then
  docker stop "$APP_NAME" || true
  docker rm "$APP_NAME" || true
fi

# Executa novo container em background (assume TLS/reverse-proxy no host)
docker run -d \
  --name "$APP_NAME" \
  --restart=always \
  -e NODE_ENV=production \
  -p 8080:8080 \
  "$APP_NAME:latest"

# Recarrega nginx se estiver presente (para aplicar certificados SSL existentes)
if command -v systemctl >/dev/null 2>&1 && systemctl is-active --quiet nginx; then
  systemctl reload nginx || true
elif docker ps --format '{{.Names}}' | grep -q '^nginx$'; then
  docker exec nginx nginx -s reload || true
fi

EOF

echo "Deploy finalizado. Verifique logs no servidor se necessário."
