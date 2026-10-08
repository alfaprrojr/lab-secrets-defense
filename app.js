require("dotenv").config();
const config = {
  secret_token: process.env.SECRET_TOKEN
};
console.log("Servicio iniciado de forma segura.");
