FROM nginx
RUN sed -i 's/#gzip  on/gzip   on;\n    gzip_types text\/css application\/javascript/' /etc/nginx/nginx.conf && \
  sed -i 's/index .*$/try_files $uri $uri\/ \/VTMsite\/index.html;/' /etc/nginx/conf.d/default.conf

COPY dist/VTMsite /usr/share/nginx/html/VTMsite
