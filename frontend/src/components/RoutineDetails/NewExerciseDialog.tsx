import {
  Box,
  Dialog,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import { SyntheticEvent } from "react";

interface Props {
  newExerciseOpen: boolean,
  handleClose(event: SyntheticEvent): void,
  handleSave(event: SyntheticEvent): void,
  exerciseField: string,
  handleChange(event: SyntheticEvent): void,
}

const NewExerciseDialog = ({
  newExerciseOpen,
  handleClose,
  handleSave,
  exerciseField,
  handleChange,
}: Props) => {
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
          sx={{ marginTop: "8px" }}
          onClick={handleSave}
        >
          Create
        </Button>
      </Box>
    </Dialog>
  );
};

export default NewExerciseDialog;
