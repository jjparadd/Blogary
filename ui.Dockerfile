FROM duluca/minimal-nginx-web-server:1-alpine as webserver
COPY dist/ui /var/www
CMD 'nginx'
