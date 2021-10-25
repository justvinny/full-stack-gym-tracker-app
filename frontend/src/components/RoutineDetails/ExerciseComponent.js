import SetComponent from "./SetComponent";
import {
  Box,
  Button,
  TableRow,
  TableCell,
  IconButton,
} from "@mui/material";
import { Delete, Edit } from "@material-ui/icons";
import { useState } from "react";
import EditSetDialog from "./EditSetDialog";

const ExerciseComponent = ({
  exercise,
  routineIndex,
  workoutIndex,
  exerciseIndex,
  routines,
  setRoutines,
}) => {
  const [open, setOpen] = useState(false);
  const [dialogSet, setDialogSet] = useState({ weight: 0, reps: 0 });
  const [currentSetIndex, changeSetIndex] = useState(0);

  const editClick = (set, setIndex) => (event) => {
    event.preventDefault();
    setOpen(true);
    setDialogSet({ ...set });
    changeSetIndex(setIndex);
  };

  const deleteExercise = (event) => {
    event.preventDefault();
    const updatedExercises = routines[routineIndex].workouts[
      workoutIndex
    ].exercises.filter(
      (_exercise, _exerciseIndex) => _exerciseIndex !== exerciseIndex
    );
    const newRoutines = [...routines];
    newRoutines[routineIndex].workouts[workoutIndex].exercises =
      updatedExercises;
    setRoutines(newRoutines);
  };

  const deleteSet = (setIndex) => (event) => {
    event.preventDefault();
    const newExerciseSets = routines[routineIndex].workouts[
      workoutIndex
    ].exercises[exerciseIndex].sets.filter(
      (_set, _setIndex) => _setIndex !== setIndex
    );
    const newRoutines = [...routines];
    newRoutines[routineIndex].workouts[workoutIndex].exercises[
      exerciseIndex
    ].sets = newExerciseSets;
    setRoutines(newRoutines);
  };

  const handleClose = (event) => {
    event.preventDefault();
    setOpen(false);
  };

  const handleSave = (currentSetIndex) => (event) => {
    event.preventDefault();
    const copyRoutines = [...routines];
    copyRoutines[routineIndex].workouts[workoutIndex].exercises[
      exerciseIndex
    ].sets[currentSetIndex] = { ...dialogSet };
    setRoutines(copyRoutines);
    handleClose(event);
  };

  const handleAddSet = (event) => {
    event.preventDefault();
    const copyRoutines = [...routines];
    copyRoutines[routineIndex].workouts[workoutIndex].exercises[
      exerciseIndex
    ].sets.push({ weight: 0, reps: 12 });
    setRoutines(copyRoutines);
  };

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={deleteExercise}>
            <Delete size="small" color="primary" />
          </IconButton>
          {exercise.name}
        </TableCell>
        <TableCell align="right">{exercise.sets[0].weight}</TableCell>
        <TableCell align="right">{exercise.sets[0].reps}</TableCell>
        <TableCell width="100px" align="center">
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton size="small" onClick={editClick(exercise.sets[0], 0)}>
              <Edit size="small" color="primary" />
            </IconButton>
            <IconButton size="small" onClick={deleteSet(exercise.sets[0])}>
              <Delete size="small" color="primary" />
            </IconButton>
          </Box>
        </TableCell>
      </TableRow>
      {exercise.sets.length > 1 &&
        exercise.sets.slice(1).map((set, setIndex) => (
          <SetComponent
            key={set._id ? set._id : setIndex}
            set={set}
            editClick={editClick}
            deleteSet={deleteSet}
            setIndex={setIndex + 1} // +1 because we're starting on index 1 as we sliced the first element.
            routines={routines}
            setRoutines={setRoutines}
          />
        ))}
      <TableRow>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell align="right">
          <Button variant="contained" color="primary" onClick={handleAddSet}>
            Add Set
          </Button>
        </TableCell>
      </TableRow>
      <EditSetDialog
        open={open}
        handleClose={handleClose}
        dialogSet={dialogSet}
        setDialogSet={setDialogSet}
        handleSave={handleSave}
        currentSetIndex={currentSetIndex}
      />
    </>
  );
};

export default ExerciseComponent;