import { Box } from "@mui/material";
import InfoContainer from "../components/Home/InfoContainer";
import WeightContainer from "../components/Home/WeightContainer";
import ExercisesContainer from "../components/Home/ExercisesContainer";
import RecentWorkoutContainer from "../components/Home/RecentWorkoutContainer";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        width: "90vw",
        bgcolor: "#fff",
      }}
    >
      <InfoContainer
        name="Vinson Beduya"
        age={21}
        height={180}
        aboutMe="I love doing programming, reading fantasy novels, going to the gym, and hot chicks"
      />
      <WeightContainer />
      <ExercisesContainer />
      <RecentWorkoutContainer />
    </Box>
  );
};

export default HomePage;
