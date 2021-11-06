import { useState } from "react";
import { Dialog, Box, TextField, Button } from "@mui/material";
import React from "react";
import { handleInputChange } from "../../../utils";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  age: number;
  height: number;
  aboutMe: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setAge: React.Dispatch<React.SetStateAction<number>>;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
  setAboutMe: React.Dispatch<React.SetStateAction<string>>;
}

const EditInfoDialog = ({
  open,
  setOpen,
  name,
  age,
  height,
  aboutMe,
  setName,
  setAge,
  setHeight,
  setAboutMe,
}: Props) => {
  const [nameInput, setNameInput] = useState(name);
  const [ageInput, setAgeInput] = useState(age);
  const [heightInput, setHeightInput] = useState(height);
  const [aboutMeInput, setAboutMeInput] = useState(aboutMe);

  const save = () => {
    setName(nameInput);
    setAge(ageInput);
    setHeight(heightInput);
    setAboutMe(aboutMeInput);
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
          label="Name"
          value={nameInput}
          onChange={handleInputChange(setNameInput)}
        />
        <TextField
          variant="outlined"
          label="Age"
          value={ageInput}
          onChange={handleInputChange(setAgeInput)}
        />
        <TextField
          variant="outlined"
          label="Height"
          value={heightInput}
          onChange={handleInputChange(setHeightInput)}
        />
        <TextField
          variant="outlined"
          label="About Me"
          value={aboutMeInput}
          onChange={handleInputChange(setAboutMeInput)}
          multiline
          minRows={3}
          maxRows={5}
        />
        <Button variant="contained" onClick={save}>
          Save
        </Button>
      </Box>
    </Dialog>
  );
};

export default EditInfoDialog;
