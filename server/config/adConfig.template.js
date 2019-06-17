const tenantName    = "<YOUR_TENANT_NAME>";
const clientID      = "<YOUR_APP_ID_FROM_CLOUD_SHELL>";
const serverPort    = 3000;

module.exports.serverPort = serverPort;

module.exports.credentials = {
  identityMetadata: `https://login.microsoftonline.com/${tenantName}.onmicrosoft.com/.well-known/openid-configuration`, 
  clientID: clientID
};