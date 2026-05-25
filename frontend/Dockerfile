# -------- 1️⃣ Dependencies stage --------
FROM docker.arvancloud.ir/library/node:20-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# -------- 2️⃣ Builder stage --------
FROM docker.arvancloud.ir/library/node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# -------- 3️⃣ Production stage --------
FROM docker.arvancloud.ir/library/node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Only copy necessary files
COPY --from=builder /app/package.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]
