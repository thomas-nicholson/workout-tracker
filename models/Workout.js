const mongoose = require("mongoose");
var { Schema } = mongoose;

const Exercise = require("./ExerciseSchema");

var workoutSchema = new Schema({
    day: { type: Date, default: Date.now },
    exercises: [Exercise],
  });

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;