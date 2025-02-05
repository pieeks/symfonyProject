# Dockerfile für PHP-FPM
FROM chialab/php-dev:8.3-fpm

# Installiere die XML-Erweiterung
RUN apt-get update && apt-get install -y libxml2-dev \
    && docker-php-ext-install xml

# Installiere Node.js und npm (wenn nicht shcon installiert)
RUN apt-get update && apt-get install -y \
    curl \
    gnupg \
    lsb-release\
    ca-certificates \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# Installiere Yarn
RUN npm install -g yarn

# Installiere Bootstrap mit Yarn
RUN yarn add bootstrap

# PHP-FPM starten
WORKDIR /var/www
CMD php-fpm
EXPOSE 9000
