var express = require("express");
var app = express();

//connst defined for predefined sysinfo package
const si = require("systeminformation");

//method for OS specific platform & calling data
app.get("/cputemp", function(req, res) {
  si.cpuTemperature().then(data => {
    res.status(200).send(data);
  });
});

//port set to local
var port = process.env.PORT || 3000;

//Launching to port
var server = app.listen(port, function() {
  console.log("Fetching CPU Information and listening on port " + port);
});
