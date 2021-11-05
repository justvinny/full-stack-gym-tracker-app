import { Box, Grid, Avatar } from "@mui/material";
import ContainerHeading from "./ContainerHeading";
import { bgColor } from "../../defaults";

interface Props {
  name: string;
  age: number;
  height: number;
  aboutMe: string;
}

const InfoContainer = ({ name, age, height, aboutMe }: Props) => {
  const getInitials = () => {
    const nameArr = name.split(" ");

    switch (nameArr.length) {
      case 0: {
        return "A";
      }
      case 1: {
        return nameArr[0].charAt(0);
      }
      default: {
        return nameArr[0].charAt(0) + nameArr[nameArr.length - 1].charAt(0);
      }
    }
  };

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
      <ContainerHeading label="Basic Information" />
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
          {getInitials()}
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
