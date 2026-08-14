# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Copia apenas manifestos primeiro para aproveitar cache
COPY package*.json ./

# Instala dependências de build e toolchain necessário para módulos nativos
RUN apk add --no-cache python3 make g++
RUN npm install

# Copia todo o projeto e gera o build de produção
COPY . .
RUN npm run build

# Runtime stage
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copia apenas os artefatos necessários para rodar
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "run", "start"]
