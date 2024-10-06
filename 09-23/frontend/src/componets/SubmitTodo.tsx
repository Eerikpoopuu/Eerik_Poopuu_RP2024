import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type SubmitTodoProps = {
  fetchTodos: () => void;
};

const SubmitTodo = ({ fetchTodos }: SubmitTodoProps) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<number | null>(null);

  const submitTodo = async () => {
    try {
      const response = await fetch("http://localhost:8080/todo", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title, priority: priority }),
      });

      if (response.ok) {
        console.log("Success", response);
        fetchTodos(); 
      } else {
        console.warn("No success");
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    submitTodo();
    setTitle("");
    setPriority(null);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form onSubmit={handleSubmit}>
        <Stack>
          <TextField
            label="Todo pealkiri"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            label="Prioriteet"
            type="number"
            value={priority || ""}
            onChange={(event) => setPriority(parseInt(event.target.value))}
          />
          <Button type="submit">Add Todo</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default SubmitTodo;
