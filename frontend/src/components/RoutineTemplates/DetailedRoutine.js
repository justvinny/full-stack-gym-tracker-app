import {
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
        <div className={classes.root}>
            {routine.content.map((workout, index) => {
                return (
                    <TableContainer key={workout.day + workout.name + index} component={Paper} className={classes.tableContainer}>
                        <Typography variant="h5" className={classes.workoutDay}>Day {workout.day} - {workout.name}</Typography>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.boldText}>Exercise</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {workout.exercises.map((exercise, index) => {
                                    return (
                                        <TableRow key={exercise + index}>
                                            <TableCell component="th" scope="row">{exercise}</TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )
            })}
        </div>
    )
}

export default DetailedRoutine;