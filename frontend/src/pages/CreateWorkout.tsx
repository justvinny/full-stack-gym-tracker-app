import { TextField, Button, Box, ThemeProvider, Divider } from "@mui/material";
import { ChangeEvent, useState } from "react";
import PageTitleHeader from "../components/PageTitleHeader";
import routineServices from "../services/routineServices";
import customTheme from "../themes/customTheme";
import { Routine } from "../types";

interface Props {
  routines: Routine[];
  setRoutines: React.Dispatch<React.SetStateAction<Routine[]>>;
}

const CreateWorkout = ({ setRoutines, routines }: Props) => {
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
              reps: 12,
            },
          ],
        },
      ],
    },
  ]);

  // Input change event
  const handleChange =
    (
      setState: React.Dispatch<React.SetStateAction<any>>,
      inputType: string,
      outerIndex?: number,
      innerIndex?: number
    ) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      if (inputType === WORKOUT_NAME) {
        setState(event.target.value);
      } else if (inputType === WORKOUT_DAY && outerIndex !== undefined) {
        const newWorkouts = [...routine];
        newWorkouts[outerIndex].day = event.target.value;
        setState(newWorkouts);
      } else if (
        inputType === EXERCISE &&
        outerIndex !== undefined &&
        innerIndex !== undefined
      ) {
        const newWorkouts = [...routine];
        newWorkouts[outerIndex].exercises[innerIndex].name = event.target.value;
        setState(newWorkouts);
      }
    };

  // Button events
  const addExercise = (index: number) => (event: React.SyntheticEvent) => {
    event.preventDefault();
    const newWorkouts = [...routine];
    const newExercises = [...newWorkouts[index].exercises];
    newWorkouts[index].exercises = newExercises.concat([
      { name: "", sets: [{ weight: 0, reps: 12 }] },
    ]);
    setRoutine(newWorkouts);
  };

  const addWorkoutDay = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (routine.length >= 7)
      return window.alert(
        "Can't add more workouts. There's only 7 days in a week."
      );
    setRoutine([
      ...routine,
      {
        day: "",
        exercises: [{ name: "", sets: [{ weight: 0, reps: 12 }] }],
      },
    ]);
  };

  const createWorkout = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const routineObj = {
      name: routineInput,
      workouts: routine,
    };
    routineServices
      .addRoutine(routineObj)
      .then((data) => setRoutines([...routines, data]))
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
                    reps: 12,
                  },
                ],
              },
            ],
          },
        ]);
      })
      .then(() => {
        window.alert("Successfully Created!");
      })
      .catch((e) => console.error(e));
  };

  return (
    <ThemeProvider theme={customTheme.myTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          width: "90vw",
          maxWidth: "650px",
        }}
      >
        <PageTitleHeader title="New Workout" />
        <TextField
          label="New Workout Name"
          value={routineInput}
          onChange={handleChange(setRoutineInput, WORKOUT_NAME)}
          variant="outlined"
          sx={{ margin: "4px 0px" }}
        />
        {routine.map((workout, outerIndex) => (
          <Box
            key={"workout" + outerIndex}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
            }}
          >
            <Divider />
            <Box
              sx={{
                fontWeight: 700,
                fontSize: "h6.fontSize",
                margin: "4px 0px",
              }}
            >
              Day {outerIndex + 1}
            </Box>
            <TextField
              label="Add Workout Day"
              value={routine[outerIndex].day}
              onChange={handleChange(setRoutine, WORKOUT_DAY, outerIndex)}
              variant="outlined"
              sx={{ margin: "4px 0px" }}
            />
            {workout.exercises.map((exercise, innerIndex) => (
              <TextField
                label="Add Exercise"
                value={routine[outerIndex].exercises[innerIndex].name}
                key={"exercise" + innerIndex}
                variant="outlined"
                onChange={handleChange(
                  setRoutine,
                  EXERCISE,
                  outerIndex,
                  innerIndex
                )}
                sx={{ margin: "4px 0px" }}
              />
            ))}
            <Button
              variant="contained"
              color="primary"
              onClick={addExercise(outerIndex)}
              sx={{ margin: "4px 0px", padding: "12px" }}
            >
              Add Exercise
            </Button>
          </Box>
        ))}
        <Divider />
        <Button
          variant="contained"
          color="primary"
          onClick={addWorkoutDay}
          sx={{ margin: "4px 0px", padding: "12px" }}
        >
          Add Workout Day
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={createWorkout}
          sx={{ margin: "4px 0px", padding: "12px" }}
        >
          Create Workout
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default CreateWorkout;
