import { Box, List, ListItem, ListItemText, Typography, IconButton, TextField, Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SubmitTodo from "./SubmitTodo"; 

type Todo = {
  id: string;
  title: string;
  priority: number;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState<string>("");
  const [editPriority, setEditPriority] = useState<number | null>(null);

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:8080/todo");
      if (!response.ok) {
        throw new Error("Todo toomine ebaõnnestus.");
      }
      const data = await response.json();
      setTodos(data);
    } catch (error: any) {
      setError(error.message);
    }
  };

 
  const deleteTodo = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:8080/todo/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)); 
      } else {
        console.warn("todo kustutamine ebaõnnestus.");
      }
    } catch (error) {
      console.warn(error);
    }
  };

 
  const updateTodo = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:8080/todo/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: editTitle, priority: editPriority }),
      });

      if (response.ok) {
        fetchTodos(); 
      } else {
        console.warn("todo uuendamine ebaõnnestus.");
      }
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Box>
      <Typography variant="h3">Todo</Typography>

      {error ? (
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      ) : (
        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              <ListItemText
                primary={todo.title}
                secondary={`Prioriteet: ${todo.priority}, Loodud: ${new Date(todo.createdAt).toLocaleString()}`}
              />
              <TextField
                label="Uus pealkiri"
                variant="outlined"
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <TextField
                label="Prioriteet"
                variant="outlined"
                type="number"
                onChange={(e) => setEditPriority(parseInt(e.target.value))}
              />
              <Button onClick={() => updateTodo(todo.id)}>Uuenda</Button>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}

      <SubmitTodo fetchTodos={fetchTodos} />
    </Box>
  );
};

export default Todos;
