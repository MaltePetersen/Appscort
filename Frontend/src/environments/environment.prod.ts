
import { KeycloakConfig } from 'keycloak-angular';

let keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'Demo-Realm',
  clientId: 'tutorial-frontend'
};
export const environment = {
  production: true,
  keycloak: keycloakConfig

};
