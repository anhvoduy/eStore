The solution includes: (from release 2.0)
- public        : Public Site
- client        : Admin Site
- server        : APIs
- database      : estore
- storage       : fs or azure blob or amazone s3
- config info   : "/server/config/config.js" to setup: username & password & database name
- hosting       : http://ec2-34-205-24-111.compute-1.amazonaws.com/
- user/password : admin/@dmin


For start review:
- install nodejs 8.11.1 LTS
- open command line:
	npm install or yarn install
	npm run start or npm run dev (with nodemon)
- public site: http://localhost:8000/
- admin  site: http://localhost:8000/admin/


For download & guide:
- nodejs: https://nodejs.org/en/
- nodemon: https://github.com/remy/nodemon
- elasticsearch: https://www.elastic.co/guide/en/elasticsearch/reference/current/windows.html/
- redis: https://redis.io/
- azure : https://docs.microsoft.com/en-us/azure/app-service-web/app-service-web-tutorial-nodejs-mongodb-app


For docker: 
- https://hub.docker.com/r/mysql/mysql-server/
- docker pull mysql/mysql-server:5.7
- docker run --name=mysql1 -d mysql/mysql-server:5.7
- docker ps
- docker logs mysql1
- docker exec -it mysql1 mysql -uroot -p
- docker exec -it mysql1 bash 

