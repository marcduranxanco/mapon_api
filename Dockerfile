# see https://github.com/cmaessen/docker-php-sendmail for more information

FROM php:5-fpm

RUN apt-get update && apt-get install -q -y ssmtp mailutils && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install mysql mysqli sysvsem
