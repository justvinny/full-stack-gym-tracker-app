import {
  Box,
  Dialog,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";

const NewExerciseDialog = ({
  newExerciseOpen,
  handleClose,
  handleSave,
  exerciseField,
  handleChange,
}) => {
  return (
    <Dialog onClose={handleClose} open={newExerciseOpen}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "0px 16px 16px 16px",
        }}
      >
        <DialogTitle>Add New Exercise</DialogTitle>
        <TextField
          label="Exercise Name"
          variant="outlined"
          value={exerciseField}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 8 }}
          onClick={handleSave}
        >
          Create
        </Button>
      </Box>
    </Dialog>
  );
};

export default NewExerciseDialog;
