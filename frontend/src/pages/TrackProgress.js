import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import routineServices from "../services/routineServices";
import CreateWorkout from "./CreateWorkout";
import RoutineDetails from "./RoutineDetails";

const useStyles = makeStyles((theme) => ({
    linksContainer: {
        display: "flex",
        flexDirection: "column"
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
                <h1>Track progress!</h1>
                <div className={classes.linksContainer}>
                    {routines.map(routine => <Link key={routine._id} to={`${path}/${routine._id}`}>{path}/{routine.name}</Link>)}
                    <Link to={`${path}/create-workout`}>{path}/create-workout</Link>
                </div>
            </Route>
            {routines.map((routine, routineIndex) => (
                <Route key={routine._id} path={`${path}/${routine._id}`}>
                    <RoutineDetails routine={routine} routineIndex={routineIndex} routines={routines} setRoutines={setRoutines}/>
                </Route>
            ))}
            <Route path={`${path}/create-workout`}>
                <CreateWorkout setRoutines={setRoutines} routines={routines} />
            </Route>

        </Switch>
    )
}

export default TrackProgress;