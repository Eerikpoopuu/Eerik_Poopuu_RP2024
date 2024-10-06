const todos = [
    {
      id: "7d613b93-fa3e-4ef3-a9d2-e09e5ca6e4e6",
      title: "Complete homework",
      priority: 1,
      createdAt: 1727098800585,
      updatedAt: null,
      deleted: false,
    },
    {
      id: "2dc9ce08-d345-4fed-8560-4c6b66fb0836",
      title: "Buy groceries",
      priority: 2,
      createdAt: 1727098952739,
      updatedAt: null,
      deleted: false,
    },
  ];
  
  exports.create = (req, res) => {
    const { title, priority } = req.body;
  
    if (!title || title === "" || priority == null) {
      return res
        .status(418)
        .send({ type: "Error", message: "Must include a title and priority" });
    }
  
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      priority: priority,
      createdAt: Date.now(),
      updatedAt: null,
      deleted: false,
    };
  
    todos.push(newTodo);
  
    res.send(newTodo);
  };
  
  exports.read = (req, res) => {
    const activeTodos = todos.filter(todo => !todo.deleted); 
    res.send(activeTodos);
  };
  
  exports.update = (req, res) => {
    const { id } = req.params;
    const { title, priority } = req.body;
  
    const todo = todos.find(todo => todo.id === id);
  
  
  
    if (title) todo.title = title;
    if (priority != null) todo.priority = priority;
  
    todo.updatedAt = Date.now();
  
    res.send(todo);
  };
  
  exports.delete = (req, res) => {
    const { id } = req.params;
  
    const todo = todos.find(todo => todo.id === id);
  
   
  
    todo.deleted = true;
    todo.updatedAt = Date.now();
  
    res.send({ message: "TODO deleted", todo });
  };
  