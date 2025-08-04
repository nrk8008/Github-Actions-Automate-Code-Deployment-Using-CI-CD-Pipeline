const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('CI/CD Pipeline with GitHub Actions + Docker!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});

