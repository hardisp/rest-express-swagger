const express = require("express");
const swagger = require("./swagger"); // Import swagger.js
const todo = require("./todo"); // Import todo.js

const SERVER_PORT = 5001;
const app = express();

// Enable JSON parsing for incoming requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/todos", todo.getAll);
app.post("/todos", todo.create);
app.get("/todos/:id", todo.getById);
app.put("/todos/:id", todo.update);
app.delete("/todos/:id", todo.delete);

// Note: Add the /api-docs route to our Express app. (swagger(app))
swagger(app);

app.listen(SERVER_PORT, () => {
  console.log(`Server started on port:`, SERVER_PORT);
});
