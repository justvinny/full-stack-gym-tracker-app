import { makeStyles, Typography, TableRow, TableCell, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { linkColor } from "../../defaults";

const useStyles = makeStyles({
    editContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    edit: {
        display: "inline-block",
        color: linkColor,
        cursor: "pointer"
    }
});

const SetComponent = ({ set, deleteSet, setIndex, editClick }) => {
    const classes = useStyles();

    return (
        <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">{set.weight}</TableCell>
            <TableCell align="right">{set.reps}</TableCell>
            <TableCell width="100px" align="center">
                <div className={classes.editContainer}>
                    <Typography className={classes.edit} onClick={editClick(set)}>Edit</Typography>
                    <IconButton size="small" onClick={deleteSet(set)}><Delete size="small" color="primary" /></IconButton>
                </div>
            </TableCell>
        </TableRow>
    )
}

export default SetComponent;