FROM node:25.2.0-alpine AS base

RUN npm install --global --no-update-notifier pnpm@10.22.0

FROM base AS install

WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install

FROM base AS build

WORKDIR /app

COPY --from=install /app/node_modules ./node_modules
COPY . .

RUN pnpm build

FROM node:25.2.0-alpine

WORKDIR /app

COPY --from=build --chown=node:node /app/.output ./

USER node

EXPOSE 3000

CMD ["node", "server/index.mjs"]
