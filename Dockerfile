FROM centos

MAINTAINER Template Vkapp

RUN yum -y install python
RUN yum -y install epel-release
RUN yum -y install nodejs npm
RUN yum -y install curl
RUN yum -y install python


ENV WORK /opt/cmsvkapp-test
ADD ./ $WORK/

WORKDIR $WORK

RUN npm i
CMD curl https://cmsvkapp.herokuapp.com/api/apps/$APP_NAME/downloadJSON?server_key=$SERVER_KEY --output ./src/config/pages.js & python addappname.py & npm start
