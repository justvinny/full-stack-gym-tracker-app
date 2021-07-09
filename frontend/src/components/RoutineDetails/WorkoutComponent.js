import ExerciseComponent from "./ExerciseComponent";
import { Paper, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        margin: 0,
        marginLeft: 16,
        fontWeight: 900,
        fontSize: "1.2em"
    },
    tableContainer: {
        border: "1px solid black",
        marginBottom: 10
    }
}));

const WorkoutComponent = ({ workout, routineIndex, workoutIndex, routines, setRoutines }) => {
    const classes = useStyles();
    return (
        <>
            <TableContainer component={Paper} className={classes.tableContainer}>
                <p className={classes.title}>{workout.day.toUpperCase()}</p>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Exercise</TableCell>
                            <TableCell align="right">Weight</TableCell>
                            <TableCell align="right">Reps</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {workout.exercises.map((exercise, exerciseIndex) => (
                            <ExerciseComponent
                                key={exercise._id}
                                routineIndex={routineIndex}
                                workoutIndex={workoutIndex}
                                exerciseIndex={exerciseIndex}
                                exercise={exercise}
                                routines={routines}
                                setRoutines={setRoutines} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    )
}

export default WorkoutComponent;