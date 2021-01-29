# Mapon API test

## Local deploy
Before deploying the project you must create the __.env__ file. It's enough to rename the __example.env__ file to __.env__
After that, you must implement it with Docker.

```bash
git clone tps://github.com/marcduranxanco/mapon_api.git
cd mapon_api
cp example.env .env
docker-compose up
```

After clone the project, and exec the docer-compose command, you will have 4 containers:
- __mapon_api_php_1__: Php container.
- __mapon_api_web_1__: web server. Accessible at http://localhost.
- __mapon_api_phpmyadmin_1__: Php my admin. Web db management. Accessible at port http://localhost:8082.
- - *User*: root | *Password*: password
- __mapon_api_mysql_1__: Database container.

## Credentials to dashboard
User: administrator
Password: administrator
