const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
var HolidayAPI = require('node-holidayapi');
var hapi = new HolidayAPI('cdd8b980-c2fa-47b2-a19f-2557ed1a4e2b').v1;

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));
// API for getholidays
app.get('/api/getholidays', function(req, res){
  var parameters = { 
    country: 'US',
    year:    2015    
  };
  
  hapi.holidays(parameters, function (err, data) {
    res.send(data);
  });  
});

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
