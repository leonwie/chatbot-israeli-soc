const express = require('express');
const path = require('path');

// app.use((req, res, next) =>{
//   res.render('maintenance.hbs');
// })
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname+'/..'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'../index.html'));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
