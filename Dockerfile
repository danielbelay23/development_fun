FROM nginx:stable-alpine

# remove default config
RUN rm /etc/nginx/conf.d/default.conf

# copy custom config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# copy static files
COPY public/ /usr/share/nginx/html/

EXPOSE 8080
