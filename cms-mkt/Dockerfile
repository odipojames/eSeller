FROM agentejo/cockpit:0.9.2

ENV CMS_USER cms-mkt
ENV CMS_GROUP cms_group
ENV USER $CMS_USER

RUN addgroup $CMS_GROUP
RUN adduser $CMS_USER
RUN adduser $CMS_USER root

ENV HTTP_PORT=${HTTP_PORT:-8080}
RUN sed -s -i -e "s/Listen 80/Listen ${HTTP_PORT}/" /etc/apache2/ports.conf /etc/apache2/sites-available/*.conf

COPY src/storage/collections /var/www/html/storage/collections
COPY src/storage/forms /var/www/html/storage/forms
COPY src/storage/singleton /var/www/html/storage/singleton

COPY /src/modules/addons/LayoutComponents  /var/www/html/modules/LayoutComponents
COPY /src/modules/addons/GroupBoundAssets /var/www/html/addons/GroupBoundAssets
COPY /src/modules/addons/MultipleCollectionLink /var/www/html/addons/MultipleCollectionLink
COPY /src/modules/addons/Lokalize /var/www/html/addons/Lokalize
COPY /src/modules/addons/CloudStorage /var/www/html/addons/CloudStorage
COPY /src/modules/addons/CockpitQL /var/www/html/addons/CockpitQL

RUN mkdir -p /var/addons/

COPY src/config /var/www/html/config

RUN mkdir /etc/apache2/conf.d
RUN touch /etc/apache2/conf.d/fqdn
RUN touch /etc/apache2/httpd.conf

RUN echo "ServerName localhost" | tee /etc/apache2/conf.d/fqdn
RUN echo "ServerName localhost" | tee /etc/apache2/httpd.conf

RUN chmod -R 775 /home/$CMS_USER
RUN chown -R $CMS_USER:root /var/
RUN chmod 777 /var/www/html/storage

RUN chmod 777 -R /var/www/html/storage

RUN mkdir -p /var/www/html/storage/backups

RUN chmod 777 /var/www/html/storage/cache
RUN chmod 777 /var/www/html/storage/data
RUN chmod 777 /var/www/html/storage/thumbs
RUN chmod 777 /var/www/html/storage/uploads
RUN chmod 777 /var/www/html/storage/tmp

EXPOSE ${HTTP_PORT}
