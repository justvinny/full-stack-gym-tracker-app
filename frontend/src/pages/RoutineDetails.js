import WorkoutComponent from "../components/RoutineDetails/WorkoutComponent";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    tablesContainers: {
        display: "flex",
        flexDirection: "column"
    },
    headerContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
    }
}));
const RoutineDetails = ({ routine, routineIndex, routines, setRoutines }) => {
    const classes = useStyles();

    return (
        <div className={classes.tablesContainers}>
            <div className={classes.headerContainer}>
                <h1>{routine.name}</h1>
                <Button variant="contained" color="primary">Save Changes</Button>
            </div>
            {routine.workouts.map((workout, workoutIndex) => (
                <WorkoutComponent
                    key={workout._id}
                    workout={workout}
                    routineIndex={routineIndex}
                    workoutIndex={workoutIndex}
                    routines={routines}
                    setRoutines={setRoutines} />
            ))}
        </div>
    )
}

export default RoutineDetails;