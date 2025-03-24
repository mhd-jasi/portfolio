import express from "express";
import mysql from "mysql2";
import cors from "cors";
import open from "open";
import { exec } from "child_process";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Add your MySQL password if set
  database: "contacts_db",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database.");
  }
});

app.post("/submit", (req, res) => {
  const { name, email, phone, message } = req.body;
  const sql = "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, phone, message], (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error saving data." });
    } else {
      res.json({ message: "Message sent successfully!" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);

  // Open React app in the browser
  setTimeout(() => {
    open("http://localhost:5173"); // Change this if your React app runs on a different port
  }, 1000);
  
  // Start React app if needed
  exec("npm start", { cwd: "../portfolio" }, (err, stdout, stderr) => {
    if (err) {
      console.error("Failed to start React app:", err);
    }
    console.log(stdout);
    console.error(stderr);
  });
});
