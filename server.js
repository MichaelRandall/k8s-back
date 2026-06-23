const express = require('express');
const app = express();
const PORT = 3000

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/data', (req, res) => {
  res.json([
    { id: 1, name: "Alice", role: "Admin", status: "Active" },
    { id: 2, name: "William", role: "Developer", status: "Away" },
    { id: 3, name: "Martin", role: "Designer", status: "Offline" }
  ]);
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
