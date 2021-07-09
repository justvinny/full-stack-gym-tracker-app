import SetComponent from "./SetComponent";
import { makeStyles, Typography, Button, TableRow, TableCell } from "@material-ui/core";
import { useState } from "react";
import EditSetDialog from "./EditSetDialog";

const useStyles = makeStyles({
    edit: {
        display: "inline-block",
        color: "blue",
        cursor: "pointer"
    }
});
const ExerciseComponent = ({ exercise, routineIndex, workoutIndex, exerciseIndex, routines, setRoutines }) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [dialogSet, setDialogSet] = useState({ weight: 0, reps: 0 })

    const editClick = (setIndex, set) => (event) => {
        event.preventDefault();
        setOpen(true);
        setDialogSet({ ...set })
    }

    const handleClose = (event) => {
        event.preventDefault();
        setOpen(false);
    }

    const handleSave = (event) => {
        event.preventDefault();
        const setIndex = routines[routineIndex].workouts[workoutIndex].exercises[exerciseIndex].sets.findIndex(set => set._id === dialogSet._id);
        const copyRoutines = [...routines];
        copyRoutines[routineIndex].workouts[workoutIndex].exercises[exerciseIndex].sets[setIndex] = { ...dialogSet };
        setRoutines(copyRoutines);
        handleClose(event);
    }

    const handleAddSet = (event) => {
        event.preventDefault();
        const copyRoutines = [...routines];
        copyRoutines[routineIndex].workouts[workoutIndex].exercises[exerciseIndex].sets.push({weight: 0, reps: 12});
        setRoutines(copyRoutines);
    }

    return (
        <>
            <TableRow>
                <TableCell>{exercise.name}</TableCell>
                <TableCell align="right">{exercise.sets[0].weight}</TableCell>
                <TableCell align="right">{exercise.sets[0].reps}</TableCell>
                <TableCell width="100px" align="center"><Typography className={classes.edit} onClick={editClick(0, exercise.sets[0])}>Edit</Typography></TableCell>
            </TableRow>
            {exercise.sets.length > 1 && exercise.sets.slice(1).map((set, setIndex) => (
                <SetComponent key={set._id ? set._id : setIndex}
                    set={set}
                    editClick={editClick}
                    setIndex={setIndex + 1} // +1 because we're starting on index 1 as we sliced the first element.
                    routines={routines}
                    setRoutines={setRoutines} />
            ))}
            <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="right"><Button variant="contained" color="primary" onClick={handleAddSet}>Add Set</Button></TableCell>
            </TableRow>
            <EditSetDialog
                open={open}
                handleClose={handleClose}
                dialogSet={dialogSet}
                setDialogSet={setDialogSet}
                handleSave={handleSave} />
        </>
    )
}

export default ExerciseComponent;