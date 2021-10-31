import SetComponent from "./SetComponent";
import {
  Box,
  Button,
  TableRow,
  TableCell,
  IconButton,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import React, { SyntheticEvent, useState } from "react";
import EditSetDialog from "./EditSetDialog";
import { Routine, Exercise, WorkSet } from "../../types";

interface Props {
  exercise: Exercise,
  routineIndex: number,
  workoutIndex: number,
  exerciseIndex: number,
  routines: Routine[],
  setRoutines: React.Dispatch<React.SetStateAction<Routine[]>>,
}

const ExerciseComponent = ({
  exercise,
  routineIndex,
  workoutIndex,
  exerciseIndex,
  routines,
  setRoutines,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [dialogSet, setDialogSet] = useState({ weight: 0, reps: 0 });
  const [currentSetIndex, changeSetIndex] = useState(0);

  const editClick = (set: WorkSet, setIndex: number) => (event: SyntheticEvent) => {
    event.preventDefault();
    setOpen(true);
    setDialogSet({ ...set });
    changeSetIndex(setIndex);
  };

  const deleteExercise = (event: SyntheticEvent) => {
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

  const deleteSet = (setIndex: number) => (event: SyntheticEvent) => {
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

  const handleClose = (event: SyntheticEvent) => {
    event.preventDefault();
    setOpen(false);
  };

  const handleSave = (currentSetIndex: number) => (event: SyntheticEvent) => {
    event.preventDefault();
    const copyRoutines = [...routines];
    copyRoutines[routineIndex].workouts[workoutIndex].exercises[
      exerciseIndex
    ].sets[currentSetIndex] = { ...dialogSet };
    setRoutines(copyRoutines);
    handleClose(event);
  };

  const handleAddSet = (event: SyntheticEvent) => {
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
          <IconButton size="small" color="primary" onClick={deleteExercise}>
            <Delete fontSize="small" color="inherit" />
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
            <IconButton size="small" color="primary" onClick={editClick(exercise.sets[0], 0)}>
              <Edit fontSize="small" color="inherit" />
            </IconButton>
            <IconButton size="small" color="primary" onClick={deleteSet(0)}>
              <Delete fontSize="small" color="inherit"/>
            </IconButton>
          </Box>
        </TableCell>
      </TableRow>
      {exercise.sets.length > 1 &&
        exercise.sets.slice(1).map((set, setIndex) => (
          <SetComponent
            key={setIndex}
            set={set}
            editClick={editClick}
            deleteSet={deleteSet}
            setIndex={setIndex}
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