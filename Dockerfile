FROM node:18
RUN apt-get update -y
RUN apt-get install -y iputils-ping
CMD tail -f /dev/null