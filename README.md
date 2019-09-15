
# Appscort

Appscort is a university project which is a web application of of a imaginary recruiting agency.

## Technology Stack

 - Angular2+ Frontend
 - Keycloak Centralizied Login -> OpenId Connect 
 - Spring boot Backend
 - PostGreSql DB
## Installation
### Frontend
Execute the following commands in the Frontend folder

    npm install
    npm start

### Backend
Execute the following command in the backend folder:

    mvn spring-boot:run
### Database 
To configure the Database you have to change the setting in the application.properties file according to your own preferences.
### Keycloak
You have to download [Keycloak](https://www.keycloak.org/) and import the realm-export.json. 

After all these steps everything should work.

## Further Improvements

 - In the future I want to add a docker container to make the setup
   easier because their are some steps which error prone
   
 - The OpenId Connect features are working but an implicit flow would have better fitted the use case. This should be changed in the future 
 - Tests should be added to the project
 ## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
 
