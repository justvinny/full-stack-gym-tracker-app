import { TextField, Button, makeStyles, createMuiTheme, ThemeProvider, Divider } from "@material-ui/core"
import { useState } from "react";
import { bgColor } from "../defaults";
import workoutsServices from "../services/workoutsServices";

const useStyles = makeStyles((theme) => ({
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& *": {
            margin: 10,
            width: "95vw",
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

const CreateWorkout = () => {
    const classes = useStyles();

    const WORKOUT_NAME = "WORKOUT NAME";
    const WORKOUT_DAY = "WORKOUT DAY";
    const EXERCISE = "EXERCISE";

    // States
    const [workoutInput, setWorkoutInput] = useState("");
    const [workouts, setWorkouts] = useState([
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
            const newWorkouts = [...workouts];
            newWorkouts[outerIndex].day = event.target.value;
            setState(newWorkouts);
        } else if (inputType === EXERCISE) {
            const newWorkouts = [...workouts];
            newWorkouts[outerIndex].exercises[innerIndex].name = event.target.value;
            setState(newWorkouts);
        }
    }

    // Button events
    const addExercise = (index) => (event) => {
        event.preventDefault();
        const newWorkouts = [...workouts];
        const newExercises = [...newWorkouts[index].exercises];
        newWorkouts[index].exercises = newExercises.concat([{ name: "", sets: [{weight: 0, reps: 12}] }]);
        setWorkouts(newWorkouts);
    }

    const addWorkoutDay = (event) => {
        event.preventDefault();
        if (workouts.length >= 7)
            return window.alert("Can't add more workouts. There's only 7 days in a week.");
        setWorkouts([...workouts, {
            day: "",
            exercises: [{ name: "", sets: [{weight: 0, reps: 12}] }]
        }]);
    }

    const createWorkout = (event) => {
        event.preventDefault();
        const fullWorkoutObj = {
            name: workoutInput,
            workouts: workouts
        }
        workoutsServices.addWorkout(fullWorkoutObj);
    }

    return (
        <div>
            <ThemeProvider theme={theme}>
                <form>
                    <div className={classes.form}>
                        <TextField label="New Workout Name" value={workoutInput} onChange={handleChange(setWorkoutInput, WORKOUT_NAME)} />
                        {
                            workouts.map((workout, outerIndex) => (
                                <div key={"workout" + outerIndex}>
                                    <Divider />
                                    Day {outerIndex + 1}
                                    <TextField label="Add Workout Day" value={workouts[outerIndex].day} onChange={handleChange(setWorkouts, WORKOUT_DAY, outerIndex)} />
                                    {workout.exercises.map((exercise, innerIndex) => (
                                        <TextField label="Add Exercise" value={workouts[outerIndex].exercises[innerIndex].name} key={"exercise" + innerIndex} onChange={handleChange(setWorkouts, EXERCISE, outerIndex, innerIndex)} />
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