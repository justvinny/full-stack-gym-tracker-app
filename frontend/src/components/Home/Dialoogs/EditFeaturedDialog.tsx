import { SyntheticEvent, useState } from "react";
import {
  Dialog,
  Box,
  IconButton,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  SelectChangeEvent,
} from "@mui/material";
import { Delete } from "@material-ui/icons";
import React from "react";
import { Exercise, Workout, FeaturedExercises, Routine } from "../../../types";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  featuredExercises: FeaturedExercises;
  setFeaturedExercises: React.Dispatch<React.SetStateAction<FeaturedExercises>>;
  routines: Routine[];
}

enum SelectType {
  ROUTINE,
  WORKOUT,
  EXERCISE,
}

const EditFeaturedDialog = ({
  open,
  setOpen,
  featuredExercises,
  setFeaturedExercises,
  routines,
}: Props) => {
  const [routineSelected, setRoutineSelected] = useState("");
  const [workoutSelected, setWorkoutSelected] = useState("");
  const [exerciseSelected, setExerciseSelected] = useState("");
  const [currentRoutine, setCurrentRoutine] = useState<Routine | undefined>(
    undefined
  );
  const [currentWorkout, setCurrentWorkout] = useState<Workout | undefined>(
    undefined
  );
  const [currentExercise, setCurrentExercise] = useState<Exercise | undefined>(
    undefined
  );

  const handleChange =
    (
      setState: React.Dispatch<React.SetStateAction<string>>,
      selectType: SelectType
    ) =>
    (event: SelectChangeEvent) => {
      const selected = event.target.value;
      switch (selectType) {
        case SelectType.ROUTINE:
          clearChoices();
          setCurrentRoutine(findRoutine(selected));
          break;
        case SelectType.WORKOUT:
          clearExerciseSelected();
          setCurrentWorkout(findWorkout(selected));
          break;
        case SelectType.EXERCISE:
          setCurrentExercise(findExercise(selected));
      }
      setState(selected);
    };

  const clearChoices = () => {
    clearWorkoutSelected();
    clearExerciseSelected();
  };

  const clearWorkoutSelected = () => {
    if (workoutSelected) setWorkoutSelected("");
  };

  const clearExerciseSelected = () => {
    if (exerciseSelected) setExerciseSelected("");
  };

  const findRoutine = (selected: string) => {
    let routine;
    if (selected.length === 0) {
      routine = undefined;
    } else {
      routine = routines.find(
        (routine) => routine.name.localeCompare(selected) === 0
      );
    }
    return routine;
  };

  const findWorkout = (selected: string) => {
    let workout;
    if (selected.length === 0) {
      workout = undefined;
    } else {
      workout = currentRoutine?.workouts.find(
        (workout) => workout.day.localeCompare(selected) === 0
      );
    }
    return workout;
  };

  const findExercise = (selected: string) => {
    let exercise;
    if (selected.length === 0) {
      exercise = undefined;
    } else {
      exercise = currentWorkout?.exercises.find(
        (exercise) => exercise.name.localeCompare(selected) === 0
      );
    }
    return exercise;
  };

  const getRoutineChoices = () => {
    if (routines === undefined) return <></>;
    return routines.map((routine) => (
      <MenuItem value={routine.name}>{routine.name}</MenuItem>
    ));
  };

  const getWorkoutChoices = () => {
    if (currentRoutine === undefined) return <></>;
    return currentRoutine.workouts.map((workout) => (
      <MenuItem value={workout.day}>{workout.day}</MenuItem>
    ));
  };

  const getExerciseChoices = () => {
    if (currentWorkout === undefined) return <></>;
    return currentWorkout.exercises.map((exercise) => (
      <MenuItem value={exercise.name}>{exercise.name}</MenuItem>
    ));
  };

  const addExercise = (event: SyntheticEvent) => {
    event.preventDefault();
    if (isFeaturedExercisesFull()) {
      alert("Featured exercises are full. Please delete one first.");
      return;
    } else {
      const index = getEmptyIndex();
      const clone = cloneFeaturedExercises();
      clone[index] = currentExercise;
      setFeaturedExercises(clone);
    }
  };

  const isFeaturedExercisesFull = () =>
    featuredExercises[0] && featuredExercises[1] && featuredExercises[2];

  const getEmptyIndex = () =>
    featuredExercises.findIndex((exercise) => exercise === undefined);

  const cloneFeaturedExercises = (): FeaturedExercises => {
    const _featuredExercises: FeaturedExercises = [
      undefined,
      undefined,
      undefined,
    ];
    _featuredExercises[0] = featuredExercises[0];
    _featuredExercises[1] = featuredExercises[1];
    _featuredExercises[2] = featuredExercises[2];
    return _featuredExercises;
  };

  const deleteExercise = (index: number) => (event: SyntheticEvent) => {
    event.preventDefault();
    const clone = cloneFeaturedExercises();
    clone[index] = undefined;
    setFeaturedExercises(clone);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "16px",
          width: "300px",
          "> div,button": { marginBottom: "8px" },
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Exercise</TableCell>
                <TableCell align="center">Weight</TableCell>
                <TableCell align="center">Reps</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {featuredExercises.map((exercise, index) => (
                <TableRow>
                  <TableCell align="center">
                    {exercise !== undefined ? exercise.name : "-"}
                  </TableCell>
                  <TableCell align="center">
                    {exercise !== undefined
                      ? exercise.sets[exercise.sets.length - 1].weight
                      : "-"}
                  </TableCell>
                  <TableCell align="center">
                    {exercise !== undefined
                      ? exercise.sets[exercise.sets.length - 1].reps
                      : "-"}
                  </TableCell>
                  <TableCell align="center">
                    {exercise !== undefined ? (
                      <IconButton size="small" onClick={deleteExercise(index)}>
                        <Delete fontSize="small" color="error" />
                      </IconButton>
                    ) : (
                      "-"
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <FormControl>
          <InputLabel id="select-routine-label">Select Routine</InputLabel>
          <Select
            labelId="select-routine-label"
            label="Select Routine"
            value={routineSelected}
            onChange={handleChange(setRoutineSelected, SelectType.ROUTINE)}
          >
            <MenuItem value="">None</MenuItem>
            {getRoutineChoices()}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="select-workout-label">Select Workout</InputLabel>
          <Select
            labelId="select-workout-label"
            label="Select Workout"
            value={workoutSelected}
            onChange={handleChange(setWorkoutSelected, SelectType.WORKOUT)}
          >
            <MenuItem value="">None</MenuItem>
            {getWorkoutChoices()}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="select-exercise-label">Select Exercise</InputLabel>
          <Select
            labelId="select-exercise-label"
            label="Select Exercise"
            value={exerciseSelected}
            onChange={handleChange(setExerciseSelected, SelectType.EXERCISE)}
          >
            <MenuItem value="">None</MenuItem>
            {getExerciseChoices()}
          </Select>
        </FormControl>
        <Button variant="contained" onClick={addExercise}>
          Add
        </Button>
        <Button variant="outlined" onClick={() => setOpen(false)}>
          Close
        </Button>
      </Box>
    </Dialog>
  );
};

export default EditFeaturedDialog;
