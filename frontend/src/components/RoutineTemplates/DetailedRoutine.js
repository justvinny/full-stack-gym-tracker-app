import {
    Card,
    CardContent,
    makeStyles,
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from "@material-ui/core";
import { textColor, bgColor } from "../../defaults";
import "./DetailedRoutine.css";

const useStyles = makeStyles((theme) => ({
    root: {
        // margin: 10,
        width: "100vw"
    },
    cardHeader: {
        backgroundColor: bgColor,
        color: textColor,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerText: {
        fontFamily: "Impact"
    },
    tableContainer: {
        marginBottom: 20,
        padding: 0,
    },
    table: {
        // minWidth: 650,
    },
    boldText: {
        fontWeight: 700
    },
    workoutDay: {
        marginLeft: 16,
        fontWeight: 700
    }
}));

const DetailedRoutine = ({ routine }) => {
    const classes = useStyles();
    return (
        // <Card className={classes.card} elevation="5">
        //     <CardContent className="cardContent">
        <div className={classes.root}>
            {routine.content.map(workout => {
                return (
                    <>
                        <TableContainer component={Paper} className={classes.tableContainer} elevation="5">
                            <Typography variant="h5" className={classes.workoutDay}>Day {workout.day} - {workout.name}</Typography>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.boldText}>Exercise</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {workout.exercises.map(exercise => {
                                        return (
                                            <TableRow>
                                                <TableCell component="th" scope="row">{exercise}</TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </>
                )
            })}
        </div>
    )
}

export default DetailedRoutine;