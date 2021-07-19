import { makeStyles, Button, ThemeProvider, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import routineServices from "../services/routineServices";
import CreateWorkout from "./CreateWorkout";
import RoutineDetails from "./RoutineDetails";
import customTheme from "../themes/customTheme";
import { bgColor, textColor } from "../defaults";

const useStyles = makeStyles((theme) => ({
    headerContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        border: "1px solid black",
        marginBottom: 10,
        background: bgColor,
        color: textColor
    },
    header: {
        fontFamily: "Impact",
        letterSpacing: 1.5,
        padding: 25
    },
    linksContainer: {
        display: "flex",
        flexDirection: "column"
    },
    button: {
        width: "100%",
        marginBottom: 10
    }
}));

const TrackProgress = () => {
    const classes = useStyles();

    const [routines, setRoutines] = useState([]);
    const { path } = useRouteMatch();

    useEffect(() => {
        routineServices.getAllRoutines()
            .then(data => setRoutines(data))
            .catch(e => console.error(e));
    }, []);

    return (
        <Switch>
            <Route exact path={`${path}`}>
                <ThemeProvider theme={customTheme.myTheme}>
                    <div className={classes.headerContainer}>
                        <Typography variant="h4" className={classes.header}>Track Progress</Typography>
                    </div>
                    <div className={classes.linksContainer}>
                        {routines.map(routine => (
                            <>
                                <Link key={routine._id} to={`${path}/${routine._id}`}>
                                    <Button className={classes.button} variant="outlined" color="primary">{routine.name}</Button>
                                </Link>
                            </>
                        ))}
                        <Link to={`${path}/create-workout`}>
                            <Button className={classes.button} variant="contained" color="primary">Create Workout</Button>
                        </Link>
                    </div>
                </ThemeProvider>
            </Route>
            {routines.map((routine, routineIndex) => (
                <Route key={routine._id} path={`${path}/${routine._id}`}>
                    <RoutineDetails routine={routine} routineIndex={routineIndex} routines={routines} setRoutines={setRoutines} />
                </Route>
            ))}
            <Route path={`${path}/create-workout`}>
                <CreateWorkout setRoutines={setRoutines} routines={routines} />
            </Route>

        </Switch>
    )
}

export default TrackProgress;