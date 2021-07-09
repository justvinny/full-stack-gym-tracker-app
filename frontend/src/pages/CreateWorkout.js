import { TextField, Button, makeStyles, createMuiTheme, ThemeProvider, Divider } from "@material-ui/core"
import { useState } from "react";
import { bgColor } from "../defaults";
import routineServices from "../services/routineServices";

const useStyles = makeStyles((theme) => ({
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& *": {
            marginBottom: 10,
            width: "90vw",
            maxWidth: 650
        }
    },
    btnGroupWorkout: {
        display: "flex",
        flexDirection: "row",

    }
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: bgColor
        }
    }
});

const CreateWorkout = ({ setRoutines, routines }) => {
    const classes = useStyles();

    const WORKOUT_NAME = "WORKOUT NAME";
    const WORKOUT_DAY = "WORKOUT DAY";
    const EXERCISE = "EXERCISE";

    // States
    const [routineInput, setRoutineInput] = useState("");
    const [routine, setRoutine] = useState([
        {
            day: "",
            exercises: [
                {
                    name: "",
                    sets: [
                        {
                            weight: 0,
                            reps: 12
                        }
                    ]
                }
            ]
        }
    ]);

    // Input change event
    const handleChange = (setState, inputType, outerIndex, innerIndex) => (event) => {
        if (inputType === WORKOUT_NAME) {
            setState(event.target.value);
        } else if (inputType === WORKOUT_DAY) {
            const newWorkouts = [...routine];
            newWorkouts[outerIndex].day = event.target.value;
            setState(newWorkouts);
        } else if (inputType === EXERCISE) {
            const newWorkouts = [...routine];
            newWorkouts[outerIndex].exercises[innerIndex].name = event.target.value;
            setState(newWorkouts);
        }
    }

    // Button events
    const addExercise = (index) => (event) => {
        event.preventDefault();
        const newWorkouts = [...routine];
        const newExercises = [...newWorkouts[index].exercises];
        newWorkouts[index].exercises = newExercises.concat([{ name: "", sets: [{ weight: 0, reps: 12 }] }]);
        setRoutine(newWorkouts);
    }

    const addWorkoutDay = (event) => {
        event.preventDefault();
        if (routine.length >= 7)
            return window.alert("Can't add more workouts. There's only 7 days in a week.");
        setRoutine([...routine, {
            day: "",
            exercises: [{ name: "", sets: [{ weight: 0, reps: 12 }] }]
        }]);
    }

    const createWorkout = (event) => {
        event.preventDefault();
        const routineObj = {
            name: routineInput,
            workouts: routine
        }
        routineServices.addRoutine(routineObj)
            .then(data => setRoutines([...routines, data]))
            .then(() => {
                setRoutineInput("");
                setRoutine([
                    {
                        day: "",
                        exercises: [
                            {
                                name: "",
                                sets: [
                                    {
                                        weight: 0,
                                        reps: 12
                                    }
                                ]
                            }
                        ]
                    }
                ])
            })
            .then(window.alert("Successfully Created!"))
            .catch(e => console.error(e));
    }

    return (
        <div>
            <ThemeProvider theme={theme}>
                <form>
                    <div className={classes.form}>
                        <TextField label="New Workout Name" value={routineInput} onChange={handleChange(setRoutineInput, WORKOUT_NAME)} />
                        {
                            routine.map((workout, outerIndex) => (
                                <div key={"workout" + outerIndex}>
                                    <Divider />
                                    Day {outerIndex + 1}
                                    <TextField label="Add Workout Day" value={routine[outerIndex].day} onChange={handleChange(setRoutine, WORKOUT_DAY, outerIndex)} />
                                    {workout.exercises.map((exercise, innerIndex) => (
                                        <TextField label="Add Exercise" value={routine[outerIndex].exercises[innerIndex].name} key={"exercise" + innerIndex} onChange={handleChange(setRoutine, EXERCISE, outerIndex, innerIndex)} />
                                    ))}
                                    <Button variant="contained" color="primary" onClick={addExercise(outerIndex)}>Add Exercise</Button>
                                </div>
                            ))
                        }
                        <Divider />
                        <Button variant="contained" color="primary" onClick={addWorkoutDay}>Add Workout Day</Button>
                        <Button variant="contained" color="primary" onClick={createWorkout}>Create Workout</Button>
                    </div>
                </form>
            </ThemeProvider>
        </div>

    )
}

export default CreateWorkout;