const mongoose = require("mongoose");
const {ExerciseSchema} = require("./Exercise");

const WorkoutSchema = new mongoose.Schema({
    day: {
        type: String,
        required: true
    },
    exercises: [ExerciseSchema]
})


const Workout = mongoose.model("workout", WorkoutSchema);

exports.Workout = Workout;
exports.WorkoutSchema = WorkoutSchema;