import WorkoutComponent from "../components/RoutineDetails/WorkoutComponent";
import {
  Box,
  Button,
  Snackbar,
  IconButton,
  ThemeProvider,
  Fab,
} from "@mui/material";
import { Close, ArrowUpward } from "@material-ui/icons";
import routineServices from "../services/routineServices";
import React, { useState } from "react";
import customTheme from "../themes/customTheme";
import { ObjectId } from "mongodb";

interface Props {
  routine: Routine;
  routineIndex: number;
  routines: Routine[];
  setRoutines: React.Dispatch<React.SetStateAction<Routine[]>>;
}

interface Routine {
  _id?: ObjectId;
  name: string;
  workouts: Workout[];
}

interface Workout {
  _id?: ObjectId;
  day: string;
  exercises: Exercise[];
}

interface Exercise {
  _id?: ObjectId;
  name: string;
  sets: WorkSet[];
}

interface WorkSet {
  _id?: ObjectId;
  weight: number;
  reps: number;
}

const RoutineDetails = ({
  routine,
  routineIndex,
  routines,
  setRoutines,
}: Props) => {
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const saveToDB = (event: React.SyntheticEvent) => {
    event.preventDefault();
    routineServices
      .updateRoutine(routine)
      .then(() => {
        setOpenSnackBar(true);
      })
      .catch((error) => console.log(error));
  };

  const handleClose = (event: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBar(false);
  };

  const scrollToTop = (event: React.SyntheticEvent) => {
    event.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <ThemeProvider theme={customTheme.myTheme}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <h1>{routine.name}</h1>
            <Button variant="contained" color="primary" onClick={saveToDB}>
              Save Changes
            </Button>
          </Box>
          {routine.workouts.map((workout, workoutIndex) => (
            <WorkoutComponent
              key={(workout._id ? workout._id : workoutIndex) as React.Key}
              workout={workout}
              routineIndex={routineIndex}
              workoutIndex={workoutIndex}
              routines={routines}
              setRoutines={setRoutines}
            />
          ))}
        </Box>
        <Fab
          color="primary"
          onClick={scrollToTop}
          sx={{ position: "fixed", bottom: "10px", right: "10px" }}
        >
          <ArrowUpward />
        </Fab>
      </ThemeProvider>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={openSnackBar}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Successfully saved changes!"
        action={
          <>
            <IconButton size="small" onClick={handleClose} color="inherit">
              <Close fontSize="small" />
            </IconButton>
          </>
        }
      />
    </>
  );
};

export default RoutineDetails;