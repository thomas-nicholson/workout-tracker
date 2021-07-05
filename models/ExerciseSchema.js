const mongoose = require("mongoose");
var { Schema } = mongoose;

var exerciseSchema = new Schema({
    type: {type: String, required: true},
    name: {type: String, required: true},
    duration: {type: Number, required: true},
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number,
  });

module.exports = exerciseSchema;