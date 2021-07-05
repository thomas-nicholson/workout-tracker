var express = require("express");
var mongoose = require("mongoose");

const routes = require('./routes');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
});

app.listen(PORT, function() {
    console.log(`Now listening on port: ${PORT}`);
});
