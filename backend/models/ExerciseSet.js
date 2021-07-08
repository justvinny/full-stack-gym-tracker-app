const mongoose = require("mongoose");

const ExerciseSetSchema = new mongoose.Schema({
    weight: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    }
})

const ExerciseSet = mongoose.model("set", ExerciseSetSchema);

exports.ExerciseSet = ExerciseSet;
exports.ExerciseSetSchema = ExerciseSetSchema;