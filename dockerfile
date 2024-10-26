FROM php:8.2-fpm-alpine

RUN apk add --no-cache bash libpng-dev libjpeg-turbo-dev curl autoconf make g++ oniguruma-dev libzip-dev linux-headers mysql-client \
    && docker-php-ext-configure gd --with-jpeg \
    && docker-php-ext-install gd pdo_mysql mysqli mbstring zip exif pcntl bcmath \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www/html

COPY . /var/www/html

EXPOSE 8000

CMD ["php-fpm"]
