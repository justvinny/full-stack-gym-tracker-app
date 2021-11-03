import { Box } from "@mui/material";
import InfoContainer from "../components/Home/InfoContainer";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        height: "80vh",
        width: "90vw",
        bgcolor: "#fff",
      }}
    >
      <InfoContainer
        name="Vinson Beduya"
        age={21}
        height={180}
        aboutMe="I love doing programming, reading fantasy novels, going to the gym, and banging hot chicks"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          bgcolor: "green",
        }}
      >
        <h1>Middle container</h1>
        {/* 1 box contains name, age, and height */}
        {/* 3 circles Weight: starting, current, goal */}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          bgcolor: "pink",
        }}
      >
        {/* 3 boxes showing 3 favourite exercises with information: exercise name, best weight, reps */}
        {/* Shows 5 recent workouts and their dates, and duration. */}
        <h1>Bot container</h1>
      </Box>
    </Box>
  );
};

export default HomePage;
