// get http features from node
let http = require('http');
let PORT = 8000;

// Make an express app
let express = require('express');
let app = express();

// Create an http server
let server = http.createServer(app).listen(PORT, function(){
  console.log("Server listening on port:" + PORT);
});



// Tell express app where to look for documents
app.use(express.static('public'));
