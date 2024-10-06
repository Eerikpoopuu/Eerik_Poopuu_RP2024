import { Box, List, ListItem, ListItemText, Typography, IconButton, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import SubmitCat from "./SumbitCats";
import DeleteIcon from "@mui/icons-material/Delete";

type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Cats = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [editName, setEditName] = useState<string>("");

  const fetchCats = async () => {
    try {
      const response = await fetch("http://localhost:8080/cats");
      if (!response.ok) {
        throw new Error("Kasside toomine ebaõnnestus.");
      }
      const data = await response.json();
      setCats(data);
    } catch (error: any) {
      setError(error.message);
    }
  };

  // Kassi kustutamine API-st
  const deleteCat = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:8080/cats/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setCats((prevCats) => prevCats.filter((cat) => cat.id !== id)); // Uuendame loendi
      } else {
        console.warn("Kassi kustutamine ebaõnnestus.");
      }
    } catch (error) {
      console.warn(error);
    }
  };

  // Kassi uuendamine API-s
  const updateCat = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:8080/cats/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: editName }),
      });

      if (response.ok) {
        fetchCats(); // Uuenda nimekiri uuesti pärast uuendamist
      } else {
        console.warn("Kassi uuendamine ebaõnnestus.");
      }
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <Box>
      <Typography variant="h3">Kassid</Typography>

      {error ? (
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      ) : (
        <List>
          {cats.map((cat) => (
            <ListItem key={cat.id}>
              <ListItemText
                primary={cat.name}
                secondary={`Loodud: ${new Date(cat.createdAt).toLocaleString()}`}
              />
              <TextField
                label="Uus nimi"
                variant="outlined"
                onChange={(e) => setEditName(e.target.value)}
              />
              <Button onClick={() => updateCat(cat.id)}>Uuenda</Button>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteCat(cat.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}

      <SubmitCat fetchCats={fetchCats} />
    </Box>
  );
};

export default Cats;
