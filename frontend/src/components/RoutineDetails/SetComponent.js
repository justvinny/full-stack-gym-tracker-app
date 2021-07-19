import { makeStyles, TableRow, TableCell, IconButton } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";

const useStyles = makeStyles({
    editContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
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
                    <IconButton size="small" onClick={editClick(set, setIndex)}><Edit size="small" color="primary" /></IconButton>
                    <IconButton size="small" onClick={deleteSet(setIndex)}><Delete size="small" color="primary" /></IconButton>
                </div>
            </TableCell>
        </TableRow>
    )
}

export default SetComponent;