import { SyntheticEvent, useState } from "react";
import {
  Dialog,
  Box,
  Button,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import {
  Exercise,
  Workout,
  FeaturedExercises,
  Routine,
  SelectType,
} from "../../../types";
import FeaturedExercisesTable from "./FeaturedExercisesTable";
import FeaturedExercisesSelectors from "./FeaturedExercisesSelectors";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  featuredExercises: FeaturedExercises;
  setFeaturedExercises: React.Dispatch<React.SetStateAction<FeaturedExercises>>;
  routines: Routine[];
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
        <FeaturedExercisesTable
          featuredExercises={featuredExercises}
          deleteExercise={deleteExercise}
        />
        <FeaturedExercisesSelectors
          routineSelected={routineSelected}
          workoutSelected={workoutSelected}
          exerciseSelected={exerciseSelected}
          setRoutineSelected={setRoutineSelected}
          setWorkoutSelected={setWorkoutSelected}
          setExerciseSelected={setExerciseSelected}
          getRoutineChoices={getRoutineChoices}
          getWorkoutChoices={getWorkoutChoices}
          getExerciseChoices={getExerciseChoices}
          handleChange={handleChange}
        />
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
