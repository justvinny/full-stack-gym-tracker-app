import { Box, Grid } from "@mui/material";
import InfoContainer from "../components/Home/InfoContainer";
import WeightContainer from "../components/Home/WeightContainer";
import ExercisesContainer from "../components/Home/ExercisesContainer";
import RecentWorkoutContainer from "../components/Home/RecentWorkoutContainer";

const HomePage = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        alignItems: "center",
        width: "90vw",
        bgcolor: "#fff",
        maxWidth: { xs: "650px", md: "950px" },
        marginTop: "8px",
      }}
    >
      <InfoContainer
        name="Vinson Beduya"
        age={21}
        height={180}
        aboutMe="I love doing programming, reading fantasy novels, going to the gym, and hfasfasfasfasasfas"
      />
      <Grid item xs={12} md={9} sx={{ padding: "16px" }}>
        <WeightContainer />
        <ExercisesContainer />
      </Grid>
      <RecentWorkoutContainer />
    </Grid>
  );
};

export default HomePage;
