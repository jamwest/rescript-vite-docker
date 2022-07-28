FROM node:16 as builder

WORKDIR /opt/

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

FROM node:16

ARG DIR_PATH

WORKDIR ${DIR_PATH}
COPY --from=builder /opt/node_modules ./node_modules
COPY bsconfig.json package.json package-lock.json vite.config.js ./

CMD ["npm", "run", "--silent", "docker-stage-1"]
