const express = require('express');
const path = require('path');
let port = process.env.PORT;

const app = express();

app.use(express.static(path.join(__dirname, './client/build')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

if (port == null || port == "") {
    port = 9000;
  }
  
  app.listen(port, () => {
    console.log(`Server has started successfully on ${port}`);
  });