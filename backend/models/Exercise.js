const mongoose = require("mongoose");
const {ExerciseSetSchema} = require("./ExerciseSet");

const ExerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateCreated: Date,
    sets: [ExerciseSetSchema]
})

const Exercise = mongoose.model("exercise", ExerciseSchema);

exports.Exercise = Exercise;
exports.ExerciseSchema = ExerciseSchema;