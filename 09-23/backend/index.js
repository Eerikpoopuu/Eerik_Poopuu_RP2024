const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const jwt = require("jsonwebtoken"); 
const port = 8080;

const app = express();

app.use(cors());
app.use(morgan("dev"));


const catsRoutes = require("./routes/cats.routes");
const exampleRoutes = require("./routes/example.routes");
const todoRoutes = require("./routes/todo.routes");

app.use("/cats", catsRoutes);
app.use("/examples", exampleRoutes);
app.use("/todo", todoRoutes);




app.post("/token", (req, res) => {
    const name = req.body.name; 
 
    const token = jwt.sign({ name }, "shhh");
    res.send({ token });
});


app.post("/verify", (req, res) => {
    const token = req.body.token; 

    jwt.verify(token, "shhh", (err, decoded) => {
       
        res.send("Token is valid"); 
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
