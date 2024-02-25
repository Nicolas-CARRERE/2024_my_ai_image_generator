import express from "express";

const apiKey = process.env.REACT_APP_API_KEY;  // Retrieve the environment variable 

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json()); // add this line
app.get("/", (req, res) => res.send("Hello from server!"));

app.listen(PORT, () => console.log(`⚡Server is running here 👉 https://localhost:${PORT}`));
