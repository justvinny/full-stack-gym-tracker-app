import { useState } from "react";
import { Dialog, Box, TextField, Button } from "@mui/material";
import React from "react";
import { handleInputChange } from "../../../utils";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  startWeight: number;
  currentWeight: number;
  goalWeight: number;
  setStartWeight: React.Dispatch<React.SetStateAction<number>>;
  setCurrentWeight: React.Dispatch<React.SetStateAction<number>>;
  setGoalWeight: React.Dispatch<React.SetStateAction<number>>;
}
const EditWeightDialog = ({
  open,
  setOpen,
  startWeight,
  currentWeight,
  goalWeight,
  setStartWeight,
  setCurrentWeight,
  setGoalWeight,
}: Props) => {
  const [startWeightInput, setStartWeightInput] = useState(startWeight);
  const [currentWeightInput, setCurrentWeightInput] = useState(currentWeight);
  const [goalWeightInput, setGoalWeightInput] = useState(goalWeight);

  const save = () => {
    setStartWeight(startWeightInput);
    setCurrentWeight(currentWeightInput);
    setGoalWeight(goalWeightInput);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "16px",
          width: "300px",
          "& div": { marginBottom: "8px" },
        }}
      >
        <TextField
          variant="outlined"
          label="Start Weight"
          value={startWeightInput}
          onChange={handleInputChange(setStartWeightInput)}
        />
        <TextField
          variant="outlined"
          label="Current Weight"
          value={currentWeightInput}
          onChange={handleInputChange(setCurrentWeightInput)}
        />
        <TextField
          variant="outlined"
          label="Goal Weight"
          value={goalWeightInput}
          onChange={handleInputChange(setGoalWeightInput)}
        />
        <Button variant="contained" onClick={save}>
          Save
        </Button>
      </Box>
    </Dialog>
  );
};

export default EditWeightDialog;
