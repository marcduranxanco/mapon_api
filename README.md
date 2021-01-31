# Mapon API test

## Local deploy
Before deploying the project you must create the __.env__ file. Use the __example.env__ file as a reference to create your __.env__. You must replace *GMAPS_KEY* by a valid Google Maps API key.
After that, you must implement it with Docker.

### First deploy
```bash
git clone tps://github.com/marcduranxanco/mapon_api.git
cd mapon_api
cp example.env .env
sed -i s/__GMAPS_KEY__/YOUR-API-KEY/g .env
docker-compose up
```

After clone the project, and exec the docer-compose command, you will have 4 containers:
- __mapon_api_php_1__: Php container.
- __mapon_api_web_1__: web server. Accessible at http://localhost.
- __mapon_api_phpmyadmin_1__: Php my admin. Web db management. Accessible at port http://localhost:8082.
- - *User*: root | *Password*: password
- __mapon_api_mysql_1__: Database container.

*Note: you can run __docker-compose up__ to start the project after your first deploy*
## Credentials to dashboard
User: administrator
Password: administrator

# Objectives / Achievements
- :white_check_mark: Username, Password fields, and a Login button .
- :white_check_mark: Users are stored in a database.
- :white_check_mark: Displays a Google Maps map with the route taken by the car (polyline)
- :negative_squared_cross_mark: Displays a Google Maps map with the stopping places (icons)
- :white_check_mark: Route and stopping places data is requested from the Mapon API
- :white_check_mark: Users must be able to choose a different time period (date from/to)
- :white_check_mark: The project must also include a DB schema or migration script.
- :white_check_mark: Can not use frameworks (Laravel etc)