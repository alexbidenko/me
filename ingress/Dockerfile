FROM nginx:1.29.1-alpine

COPY http.conf /etc/nginx/nginx.conf
COPY site.conf /etc/nginx/conf.d/default.conf

RUN touch /var/run/nginx.pid && \
    mkdir -p /var/cache/nginx/ipx && \
    chown -R nginx:nginx /etc/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/run/nginx.pid

USER nginx

EXPOSE 4000

CMD ["nginx", "-g", "daemon off;"]
