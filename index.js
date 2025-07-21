const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello from Ayush');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App running on port ${port}`);
});
