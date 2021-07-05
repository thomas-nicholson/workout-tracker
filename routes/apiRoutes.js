const router = require('express').Router();
var db = require("../models");


router.get("/workouts", (req,res) => {
    //db.Workout.find({}).then((dbWorkouts) => res.json(dbWorkouts));

    db.Workout.aggregate().addFields({
        totalDuration: {$sum: "$exercises.duration"}
    }).exec(function (err, r) {
        if (err) return handleError(err);
        console.log(r);
        res.json(r);

      });
});

router.put("/workouts/:id", async (req,res) => {
    //db.Workout.updateOne({ _id: req.params.id }).exercises.push(req.body).then((dbWorkout) => res.json(dbWorkout));

    const updateWorkout = await db.Workout.findOne({ _id: req.params.id });
    try {
        updateWorkout.exercises.push(req.body);

        const updated = await updateWorkout.save();
        console.log(updated)
        res.json(updated);
    } catch (err) {
        console.log(err);
    }
    
});

router.post("/workouts", (req,res) => {
    const newWorkout = new db.Workout(req.body);
    newWorkout.save().then((dbWorkouts) => res.json(dbWorkouts));

});

router.get("/workouts/range", (req,res) => {
    db.Workout.aggregate().addFields({
        totalDuration: {$sum: "$exercises.duration"}
    }).exec(function (err, r) {
        if (err) return handleError(err);
        console.log(r);
        res.json(r);

      });


});

module.exports = router;
