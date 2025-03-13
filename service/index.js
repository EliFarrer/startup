const express = require('express');
const app = express();

// define the port with command line arguments
const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.get('*', (_req, res) => {
  res.send({ msg: 'Simon service' });
});




// begin the backend service
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});