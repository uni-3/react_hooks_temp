FROM node:10.16.3-alpine AS builder

WORKDIR /tmp
COPY . .
RUN yarn install
RUN yarn run build


FROM nginx:1.17.5-alpine

COPY ./nginx/docker-nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /tmp/build /usr/share/nginx/html

# add env for inject into index.html by env.js
WORKDIR /usr/share/nginx/html

RUN apk add --no-cache nodejs yarn
RUN yarn global add @beam-australia/react-env

CMD ["/bin/sh", "-c", "react-env --dest . && nginx -g \"daemon off;\""]