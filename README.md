﻿The solution includes: (from release 2.2.2)
- public        : Public Site
- client        : Admin Site
- server        : APIs
- database      : estore
- storage       : fs or azure blob or amazone s3
- config info   : "/server/config/config.js" to setup: username & password & database name
- hosting       : http://ec2-xx-yy-hhh-kkk.compute-1.amazonaws.com/
- user/password : admin/@dmin


For running:
- install mysql  5.7
- install nodejs 8.11.1
- open command line:
	npm install or yarn install
	npm run start or npm run dev (with nodemon)
- public site: http://localhost:3000/
- admin  site: http://localhost:3000/admin/


For docker: 
- find docker hub: mysql:5.7
- find mysql ipaddress: docker inspect [containerid-mysql]
- update config mysql's ip address
- docker-compose up


For download & guide:
- nodejs: https://nodejs.org/en/
- nodemon: https://github.com/remy/nodemon
- elasticsearch: https://www.elastic.co/guide/en/elasticsearch/reference/current/windows.html/
- redis: https://redis.io/
- azure : https://docs.microsoft.com/en-us/azure/app-service-web/app-service-web-tutorial-nodejs-mongodb-app
