const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Jiksdi Express API",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Hardi",
        url: "https://jiksdi.com",
        email: "jiksdi12@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5001",
      },
    ],
  },
  apis: ["./docs/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
  );
};
