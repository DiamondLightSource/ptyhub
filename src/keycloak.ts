import Keycloak from "keycloak-js";

//Keycloak init options
const initOptions = {
  url: "https://authn.diamond.ac.uk/",
  realm: "master",
  clientId: "iat69393",
};

const keycloak = new Keycloak(initOptions);

export default keycloak;