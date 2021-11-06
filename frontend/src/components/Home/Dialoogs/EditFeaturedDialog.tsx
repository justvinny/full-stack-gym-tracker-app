import { useState } from "react";
import { Dialog, Box, TextField, Button } from "@mui/material";
import React from "react";
import { handleInputChange } from "../../../utils";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const EditFeaturedDialog = ({ open, setOpen }: Props) => {
  const [startWeightInput, setStartWeightInput] = useState();
  const [currentWeightInput, setCurrentWeightInput] = useState();
  const [goalWeightInput, setGoalWeightInput] = useState();

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
          label="Name"
          value={startWeightInput}
          onChange={handleInputChange(setStartWeightInput)}
        />
        <TextField
          variant="outlined"
          label="Age"
          value={currentWeightInput}
          onChange={handleInputChange(setCurrentWeightInput)}
        />
        <TextField
          variant="outlined"
          label="Height"
          value={goalWeightInput}
          onChange={handleInputChange(setGoalWeightInput)}
        />
        <Button variant="contained">Save</Button>
      </Box>
    </Dialog>
  );
};

export default EditFeaturedDialog;
