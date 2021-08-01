var express = require("express");
var app = express();

const si = require("systeminformation");

app.get("/cputemp", function(req, res) {
  si.cpuTemperature().then(data => {
    res.status(200).send(data);
  });
});
var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
  console.log("Fetching CPU Information andƒ listening on port " + port);
});
