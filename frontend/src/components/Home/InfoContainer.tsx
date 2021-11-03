import { Box, Avatar } from "@mui/material";

interface Props {
  name: string;
  age: number;
  height: number;
  aboutMe: string;
}

const InfoContainer = ({ name, age, height, aboutMe }: Props) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      padding: "16px",
      alignItems: { xs: "center" },
    }}
  >
    <Avatar
      sx={{
        width: { xs: "200px" },
        height: { xs: "200px" },
        fontSize: { xs: 100 },
      }}
    >
      VB
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
      <Box>About Me: {aboutMe}</Box>
    </Box>
    {/* Most recent exercises container */}
  </Box>
);

export default InfoContainer;
