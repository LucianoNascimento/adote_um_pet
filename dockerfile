FROM php:8.2-fpm-alpine

# Instalar dependências e Bash
RUN apk add --no-cache bash libpng-dev libjpeg-turbo-dev \
    && docker-php-ext-configure gd --with-jpeg \
    && docker-php-ext-install gd

WORKDIR /var/www/html

COPY . /var/www/html

EXPOSE 9000

CMD ["php-fpm"]
