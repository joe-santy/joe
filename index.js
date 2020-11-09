const express = require('express');
const path = require('path');
const port = 80;
const app = express();

const server = {
  serve : () => {
    app.use(express.static(path.join(__dirname, './public')));

    app.get('/*', (req, res) ={
      res.redirect('/');
    });

    app.listen(port);
    console.log(`Server running on port ${port}`);
  }
};

server.serve();
