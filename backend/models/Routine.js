const mongoose = require("mongoose");
const {WorkoutSchema} = require("./Workout");

// const WorkoutSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     workouts: [
//         {
//             day: {
//                 type: String,
//                 required: true
//             },
//             exercises: [
//                 {
//                     name: {
//                         type: String,
//                         required: true
//                     },
//                     dateCreated: Date,
//                     sets: [
//                         {
//                             weight: {
//                                 type: Number,
//                                 required: true
//                             },
//                             reps: {
//                                 type: Number,
//                                 required: true
//                             },
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]
// });

const RoutineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    workouts: [WorkoutSchema]
});

const Routine = mongoose.model("routine", RoutineSchema);

module.exports = Routine;