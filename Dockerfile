# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Copia apenas manifestos primeiro para aproveitar cache
COPY package*.json ./

# Instala dependências de build, toolchain para módulos nativos e libc6-compat
# (necessário para os binários nativos do Next.js/Turbopack rodarem no musl libc do Alpine)
RUN apk add --no-cache python3 make g++ libc6-compat
RUN npm install

# Copia todo o projeto e gera o build de produção
COPY . .
RUN npm run build

# Runtime stage
FROM node:20-alpine AS runner
WORKDIR /app

RUN apk add --no-cache libc6-compat

ENV NODE_ENV=production
ENV PORT=80

# Copia apenas os artefatos necessários para rodar
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 80
CMD ["sh", "-c", "next start -H 0.0.0.0 -p ${PORT}"]
