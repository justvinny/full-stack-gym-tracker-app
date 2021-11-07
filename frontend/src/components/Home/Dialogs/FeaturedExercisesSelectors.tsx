import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { SelectType } from "../../../types";

interface Props {
  routineSelected: string;
  workoutSelected: string;
  exerciseSelected: string;
  setRoutineSelected: React.Dispatch<React.SetStateAction<string>>;
  setWorkoutSelected: React.Dispatch<React.SetStateAction<string>>;
  setExerciseSelected: React.Dispatch<React.SetStateAction<string>>;
  getRoutineChoices(): JSX.Element | JSX.Element[];
  getWorkoutChoices(): JSX.Element | JSX.Element[];
  getExerciseChoices(): JSX.Element | JSX.Element[];
  handleChange(
    setState: React.Dispatch<React.SetStateAction<string>>,
    selectType: SelectType
  ): (event: SelectChangeEvent) => void;
}

const FeaturedExercisesSelectors = ({
  routineSelected,
  workoutSelected,
  exerciseSelected,
  setRoutineSelected,
  setWorkoutSelected,
  setExerciseSelected,
  getRoutineChoices,
  getWorkoutChoices,
  getExerciseChoices,
  handleChange,
}: Props) => (
  <>
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
  </>
);

export default FeaturedExercisesSelectors;
