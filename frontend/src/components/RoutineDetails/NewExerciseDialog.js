import { Dialog, DialogTitle, TextField, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        padding: "0px 16px 16px 16px"
    },
    button: {
        marginTop: 8
    }
});


const NewExerciseDialog = ({ newExerciseOpen, handleClose, handleSave, exerciseField, handleChange }) => {
    const classes = useStyles();

    return (
        <Dialog onClose={handleClose} open={newExerciseOpen}>
            <div className={classes.container}>
                <DialogTitle>Add New Exercise</DialogTitle>
                <TextField label="Exercise Name" variant="outlined" value={exerciseField} onChange={handleChange}/>
                <Button variant="contained" color="primary" className={classes.button} onClick={handleSave}>Create</Button>
            </div>
        </Dialog>
    )
}

export default NewExerciseDialog;