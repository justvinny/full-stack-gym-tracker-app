import {
  Dialog,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";

const EditSetDialog = ({
  handleClose,
  open,
  dialogSet,
  setDialogSet,
  handleSave,
  currentSetIndex,
}) => {
  const WEIGHT = "WEIGHT";
  const REPS = "REPS";

  const handleChange = (type) => (event) => {
    if (type === WEIGHT) {
      setDialogSet({ ...dialogSet, weight: Number(event.target.value) });
    } else if (type === REPS) {
      setDialogSet({ ...dialogSet, reps: Number(event.target.value) });
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Set</DialogTitle>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TextField
            type="number"
            variant="outlined"
            value={dialogSet.weight}
            onChange={handleChange(WEIGHT)}
            label="Weight"
            sx={{ marginRight: 10 }}
          ></TextField>
          <TextField
            type="number"
            variant="outlined"
            value={dialogSet.reps}
            onChange={handleChange(REPS)}
            label="Reps"
          ></TextField>
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: 10,
            alignSelf: "end",
          }}
          onClick={handleSave(currentSetIndex)}
        >
          Save
        </Button>
      </Box>
    </Dialog>
  );
};

export default EditSetDialog;