import ExerciseComponent from "./ExerciseComponent";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Button,
} from "@mui/material";
import React, { SyntheticEvent, ChangeEvent, useState } from "react";
import NewExerciseDialog from "./NewExerciseDialog";
import { Workout, Routine } from "../../types";

interface Props {
  workout: Workout;
  routineIndex: number;
  workoutIndex: number;
  routines: Routine[];
  setRoutines: React.Dispatch<React.SetStateAction<Routine[]>>;
}

const WorkoutComponent = ({
  workout,
  routineIndex,
  workoutIndex,
  routines,
  setRoutines,
}: Props) => {
  const [newExerciseOpen, setNewExericseOpen] = useState(false);
  const [exerciseField, setExerciseField] = useState("");

  const addExercise = (event: SyntheticEvent) => {
    event.preventDefault();
    setNewExericseOpen(true);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setExerciseField(event.target.value);
  };

  const handleClose = (event: SyntheticEvent) => {
    event.preventDefault();
    setNewExericseOpen(false);
  };

  const handleSave = (event: SyntheticEvent) => {
    event.preventDefault();
    const newExercise = {
      name: exerciseField,
      sets: [
        {
          weight: 0,
          reps: 12,
        },
      ],
    };
    const copyRoutines = [...routines];
    copyRoutines[routineIndex].workouts[workoutIndex].exercises.push(
      newExercise
    );
    setExerciseField("");
    handleClose(event);
    setRoutines(copyRoutines);
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "0px 0px 5px 2px",
          marginBottom: "20px",
          minWidth: "400px",
          maxWidth: { lg: "49%" },
        }}
      >
        <Box
          sx={{
            margin: 0,
            marginLeft: 16,
            fontWeight: 900,
            fontSize: "1.2em",
          }}
        >
          {workout.day.toUpperCase()}
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 900 }}>Exercise</TableCell>
              <TableCell sx={{ fontWeight: 900 }} align="right">
                Weight
              </TableCell>
              <TableCell sx={{ fontWeight: 900 }} align="right">
                Reps
              </TableCell>
              <TableCell sx={{ fontWeight: 900 }} align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workout.exercises.map((exercise, exerciseIndex) => (
              <ExerciseComponent
                key={
                  (exercise._id
                    ? exercise._id
                    : "new" + exerciseIndex) as React.Key
                }
                routineIndex={routineIndex}
                workoutIndex={workoutIndex}
                exerciseIndex={exerciseIndex}
                exercise={exercise}
                routines={routines}
                setRoutines={setRoutines}
              />
            ))}
            <TableRow>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={addExercise}
                >
                  Add Exercise
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <NewExerciseDialog
        newExerciseOpen={newExerciseOpen}
        handleClose={handleClose}
        handleSave={handleSave}
        exerciseField={exerciseField}
        handleChange={handleChange}
      />
    </>
  );
};

export default WorkoutComponent;
