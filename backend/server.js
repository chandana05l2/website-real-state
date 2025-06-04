const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup (adjust credentials)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',           // your MySQL user
  password: '123456',     // your MySQL password
  database: 'contact_form' // your database name
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL database');
});

// POST - save a new contact message
app.post('/messages', (req, res) => {
  const { name, email, subject, message } = req.body;

  const sql = 'INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, subject, message], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true, id: result.insertId });
  });
});

// GET - retrieve all messages
app.get('/messages', (req, res) => {
  db.query('SELECT * FROM messages', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// DELETE - delete message by ID
app.delete('/messages/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM messages WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Message not found' });
    res.json({ success: true, message: 'Message deleted successfully' });
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
