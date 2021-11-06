import { Box, Grid, Avatar } from "@mui/material";
import ContainerHeading from "./ContainerHeading";
import { bgColor } from "../../defaults";
import { getInitials } from "../../utils";

interface Props {
  name: string;
  age: number;
  height: number;
  aboutMe: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const InfoContainer = ({ name, age, height, aboutMe, setOpen }: Props) => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        padding: "16px",
        boxShadow: "0px 0px 5px 2px",
        marginBottom: "12px",
      }}
    >
      <ContainerHeading label="Basic Information" setOpen={setOpen} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center" },
        }}
      >
        <Avatar
          sx={{
            width: { xs: "150px" },
            height: { xs: "150px" },
            fontSize: { xs: 75 },
            bgcolor: bgColor,
          }}
        >
          {getInitials(name)}
        </Avatar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: { xs: "8px", sm: 0 },
            marginLeft: { xs: 0, sm: "8px" },
          }}
        >
          <Box>Name: {name}</Box>
          <Box>Age: {age}</Box>
          <Box>Height: {height}cm</Box>
          <Box sx={{ textAlign: "justify" }}>About Me: {aboutMe}</Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default InfoContainer;
