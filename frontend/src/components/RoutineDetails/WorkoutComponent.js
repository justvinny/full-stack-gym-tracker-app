import ExerciseComponent from "./ExerciseComponent";
import { Paper, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, makeStyles, Button } from "@material-ui/core";
import { useState } from "react";
import NewExerciseDialog from "./NewExerciseDialog";

const useStyles = makeStyles((theme) => ({
    title: {
        margin: 0,
        marginLeft: 16,
        fontWeight: 900,
        fontSize: "1.2em"
    },
    tableContainer: {
        border: "1px solid black",
        marginBottom: 10
    },
    boldText: {
        fontWeight: 900
    }
}));

const WorkoutComponent = ({ workout, routineIndex, workoutIndex, routines, setRoutines }) => {
    const classes = useStyles();

    const [newExerciseOpen, setNewExericseOpen] = useState(false);
    const [exerciseField, setExerciseField] = useState("");

    const addExercise = (event) => {
        event.preventDefault();
        setNewExericseOpen(true);
    }

    const handleChange = (event) => {
        setExerciseField(event.target.value);
    }

    const handleClose = (event) => {
        event.preventDefault();
        setNewExericseOpen(false);
    }
    
    const handleSave = (event) => {
        event.preventDefault();
        const newExercise = {
            name: exerciseField,
            sets: [
                {
                    weight: 0,
                    reps: 12
                }
            ]
        }
        const copyRoutines = [...routines];
        copyRoutines[routineIndex].workouts[workoutIndex].exercises.push(newExercise);
        setExerciseField("");
        handleClose(event);
        setRoutines(copyRoutines);
    }

    return (
        <>
            <TableContainer component={Paper} className={classes.tableContainer}>
                <p className={classes.title}>{workout.day.toUpperCase()}</p>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.boldText}>Exercise</TableCell>
                            <TableCell className={classes.boldText} align="right">Weight</TableCell>
                            <TableCell className={classes.boldText} align="right">Reps</TableCell>
                            <TableCell className={classes.boldText} align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {workout.exercises.map((exercise, exerciseIndex) => (
                            <ExerciseComponent
                                key={exercise._id ? exercise._id : "new" + exerciseIndex}
                                routineIndex={routineIndex}
                                workoutIndex={workoutIndex}
                                exerciseIndex={exerciseIndex}
                                exercise={exercise}
                                routines={routines}
                                setRoutines={setRoutines} />
                        ))}
                        <TableRow>
                            <TableCell />
                            <TableCell />
                            <TableCell />
                            <TableCell align="right">
                                <Button variant="contained" color="primary" onClick={addExercise}>Add Exercise</Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer >
            <NewExerciseDialog
                newExerciseOpen={newExerciseOpen}
                handleClose={handleClose}
                handleSave={handleSave}
                exerciseField={exerciseField}
                handleChange={handleChange}
            />
        </>
    )
}

export default WorkoutComponent;