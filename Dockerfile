FROM nginx:1.19.3 AS builder

RUN apt-get update
RUN apt-get install -y npm
RUN npm install -g @angular/cli
COPY . /products-front
WORKDIR /products-front
RUN ng build --prod

FROM nginx:1.19.3-alpine

COPY --from=builder /products-front/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /products-front/dist/products-front /usr/share/nginx/html/products-front
