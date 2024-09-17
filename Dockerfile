FROM node:18-alpine AS base
WORKDIR /app

COPY package*.json ./

FROM base AS build-deps
RUN npm install

FROM build-deps AS build
COPY . .
RUN npm run build

FROM base AS runtime

RUN addgroup --system --gid 1001 app
RUN adduser --system --uid 1001 app

COPY --from=build --chown=app:app /app/.output ./.output

ENV HOST=0.0.0.0
ENV PORT=3000
USER app
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
