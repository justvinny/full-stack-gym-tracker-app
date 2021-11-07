import { Box, Button, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import routineServices from "../services/routineServices";
import CreateWorkout from "./CreateWorkout";
import RoutineDetails from "./RoutineDetails";
import customTheme from "../themes/customTheme";
import { Routine } from "../types";
import PageTitleHeader from "../components/PageTitleHeader";

const TrackProgress = () => {
  const [routines, setRoutines] = useState([] as Routine[]);
  const { path } = useRouteMatch();

  useEffect(() => {
    routineServices
      .getAllRoutines()
      .then((data) => setRoutines(data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <ThemeProvider theme={customTheme.myTheme}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "90vw",
              maxWidth: "650px",
            }}
          >
            <PageTitleHeader title={"Track Progress"} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {routines.map((routine, index) => (
                <>
                  <Link
                    key={(routine._id ? routine._id : index) as React.Key}
                    to={`${path}/${routine._id}`}
                  >
                    <Button
                      sx={{ width: "100%", marginBottom: "10px" }}
                      variant="outlined"
                      color="primary"
                    >
                      {routine.name}
                    </Button>
                  </Link>
                </>
              ))}
              <Link to={`${path}/create-workout`}>
                <Button
                  sx={{ width: "100%", marginBottom: "10px" }}
                  variant="contained"
                  color="primary"
                >
                  Create Workout
                </Button>
              </Link>
            </Box>
          </Box>
        </ThemeProvider>
      </Route>
      {routines.map((routine, routineIndex) => (
        <Route
          key={(routine._id ? routine._id : routineIndex) as React.Key}
          path={`${path}/${routine._id}`}
        >
          <RoutineDetails
            routine={routine}
            routineIndex={routineIndex}
            routines={routines}
            setRoutines={setRoutines}
          />
        </Route>
      ))}
      <Route path={`${path}/create-workout`}>
        <CreateWorkout setRoutines={setRoutines} routines={routines} />
      </Route>
    </Switch>
  );
};

export default TrackProgress;
