let todos = [
  { title: "Hotfix get username API", point: "1", completed: true },
  { title: "Tidy-up code", point: "5", completed: false },
  { title: "Create calendar component", point: "2", completed: false },
];

// getAll: returns a list of all todo items
exports.getAll = (req, res) => {
  res.send(todos);
};

// create: creates a new todo item
exports.create = (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.send(todo);
};

// getById: returns a single todo item by ID
exports.getById = (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    res.status(404).send();
  } else {
    res.send(todo);
  }
};

// update: updates a todo item by ID
exports.update = (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    res.status(404).send();
  } else {
    const newTodo = req.body;
    todos = todos.map((t) => (t.id === id ? newTodo : t));
    res.send(newTodo);
  }
};

// delete: deletes a todo item by ID
exports.delete = (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter((t) => t.id !== id);
  res.status(204).send();
};
