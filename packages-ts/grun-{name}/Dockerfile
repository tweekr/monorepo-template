FROM node:18 AS builder

WORKDIR /workspace
COPY ../../ .

RUN yarn install --frozen-lockfile
RUN yarn build

FROM gcr.io/distroless/nodejs:18
# ARG STAGE

WORKDIR /app
COPY --from=builder /workspace/packages-ts/grun-\{name\}/dist/esbuild/index.js ./index.js
# COPY ./.env.$STAGE ./.env

CMD ["index.js"]
