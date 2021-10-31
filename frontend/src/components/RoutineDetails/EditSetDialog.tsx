import {
  Dialog,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import {SyntheticEvent} from "react";
import { WorkSet } from "../../types";


interface Props {
  handleClose(event: SyntheticEvent): void,
  open: boolean,
  dialogSet: WorkSet,
  setDialogSet: React.Dispatch<React.SetStateAction<WorkSet>>,
  handleSave(currentSetIndex: number): (event: SyntheticEvent) => void,
  currentSetIndex: number
}

const EditSetDialog = ({
  handleClose,
  open,
  dialogSet,
  setDialogSet,
  handleSave,
  currentSetIndex,
}: Props) => {
  const WEIGHT = "WEIGHT";
  const REPS = "REPS";

  const handleChange = (type: string) => (event: SyntheticEvent) => {
    if (type === WEIGHT) {
      setDialogSet({ ...dialogSet, weight: Number((event.target as HTMLInputElement).value) });
    } else if (type === REPS) {
      setDialogSet({ ...dialogSet, reps: Number((event.target as HTMLInputElement).value) });
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