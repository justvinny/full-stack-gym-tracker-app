import { makeStyles, Dialog, DialogTitle, TextField, Button } from "@material-ui/core"

const useStyles = makeStyles({
    dialog: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20
    },
    fieldContainer: {
        display: "flex",
        flexDirection: "row"
    },
    field: {
        marginRight: 10
    },
    button: {
        marginTop: 10,
        alignSelf: "end"
    }
});

const EditSetDialog = ({ handleClose, open, dialogSet, setDialogSet, handleSave, currentSetIndex }) => {
    const classes = useStyles();

    const WEIGHT = "WEIGHT";
    const REPS = "REPS";

    const handleChange = (type) => (event) => {
        if (type === WEIGHT) {
            setDialogSet({ ...dialogSet, weight: Number(event.target.value) });
        } else if (type === REPS) {
            setDialogSet({ ...dialogSet, reps: Number(event.target.value) });
        }
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                Edit Set
            </DialogTitle>
            <div className={classes.dialog}>
                <div className={classes.fieldContainer}>
                    <TextField type="number" variant="outlined" value={dialogSet.weight} onChange={handleChange(WEIGHT)} label="Weight" className={classes.field}></TextField>
                    <TextField type="number" variant="outlined" value={dialogSet.reps} onChange={handleChange(REPS)} label="Reps"></TextField>
                </div>
                <Button variant="contained" color="primary" className={classes.button} onClick={handleSave(currentSetIndex)}>Save</Button>
            </div>
        </Dialog>
    )
}

export default EditSetDialog;