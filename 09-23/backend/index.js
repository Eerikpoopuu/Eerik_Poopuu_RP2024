const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const port = 8080;

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); 

const catsRoutes = require("./routes/cats.routes");
const exampleRoutes = require("./routes/example.routes");
const todoRoutes = require("./routes/todo.routes");
const tokenRoutes = require("./routes/token.routes"); 

app.use("/cats", catsRoutes);
app.use("/examples", exampleRoutes);
app.use("/todo", todoRoutes);
app.use("/auth", tokenRoutes); 

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
