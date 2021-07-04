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

const useStyles = makeStyles((theme) => ({
    card: {
        margin: 10,
        backgroundColor: "#f5f5f5"
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
        marginBottom: 20
    },
    table: {
        minWidth: 650
    },
    boldText: {
        fontWeight: 700
    },
    workoutDay: {
        marginLeft: 16,
        fontWeight: 700
    }
}));

const RoutineCard = ({ routine }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card} elevation="5">
            <CardContent className={classes.cardHeader}>
                <Typography variant="h4" className={classes.headerText}>{routine.name}</Typography>
            </CardContent>
            <CardContent>
                {routine.content.map(workout => {
                    return (
                        <>
                            <TableContainer component={Paper} className={classes.tableContainer}>
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
            </CardContent>
        </Card>
    )
}

export default RoutineCard;