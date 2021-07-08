import { makeStyles, Typography, TableRow, TableCell } from "@material-ui/core";

const useStyles = makeStyles({
    edit: {
        display: "inline-block",
        color: "blue",
        cursor: "pointer"
    }
});

const SetComponent = ({ set, setIndex, editClick}) => {
    const classes = useStyles();

    return (
        <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">{set.weight}</TableCell>
            <TableCell align="right">{set.reps}</TableCell>
            <TableCell width="100px" align="center"><Typography className={classes.edit} onClick={editClick(setIndex, set)}>Edit</Typography></TableCell>
        </TableRow>
    )
}

export default SetComponent;