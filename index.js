const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

app.get('/health', (req, res) => {
  console.log("Calling /health")
  res.json({ status: 'ok' });
});

app.get('/v3', (req, res) => {
  console.log("Calling /v3")
  res.json({ message: 'Welcome to Nodejs application v3 deployment' });
});


app.get('/', (req, res) => {
  console.log("Calling /")
  res.json({ message: 'Welcome to Nodejs application deployment V1' });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});