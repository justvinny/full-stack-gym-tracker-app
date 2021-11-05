import { Grid } from "@mui/material";
import InfoContainer from "../components/Home/InfoContainer";
import WeightContainer from "../components/Home/WeightContainer";
import ExercisesContainer from "../components/Home/ExercisesContainer";
import RecentWorkoutContainer from "../components/Home/RecentWorkoutContainer";
import { Workout } from "../types";

const HomePage = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        alignItems: "center",
        width: "90vw",
        bgcolor: "#fff",
        maxWidth: { xs: "650px", lg: "1100px" },
        marginTop: "8px",
        marginBottom: "8px",
      }}
    >
      <InfoContainer
        name="Vinson Beduya"
        age={21}
        height={180}
        aboutMe="I love doing programming, reading fantasy novels, going to the gym, and hfasfasfasfasasfas"
      />
      <Grid item xs={12} lg={7} sx={{ padding: "0px !important" }}>
        <WeightContainer />
        <ExercisesContainer />
      </Grid>
      <RecentWorkoutContainer lastWorkout={mockWorkout} />
    </Grid>
  );
};

export default HomePage;

const mockWorkout: Workout = {
  day: "Workout Sample",
  exercises: [
    {
      name: "Bench Press",
      sets: [
        { weight: 100, reps: 12 },
        { weight: 100, reps: 12 },
        { weight: 100, reps: 12 },
        { weight: 120, reps: 10 },
      ],
    },
    {
      name: "Squat",
      sets: [
        { weight: 100, reps: 12 },
        { weight: 100, reps: 12 },
        { weight: 100, reps: 12 },
        { weight: 180, reps: 10 },
      ],
    },
    {
      name: "Deadlift",
      sets: [
        { weight: 100, reps: 12 },
        { weight: 100, reps: 12 },
        { weight: 100, reps: 12 },
        { weight: 220, reps: 5 },
      ],
    },
    {
      name: "Pullups",
      sets: [
        { weight: 100, reps: 12 },
        { weight: 100, reps: 12 },
        { weight: 20, reps: 15 },
      ],
    },
    {
      name: "Tricep Pushdown",
      sets: [
        { weight: 100, reps: 12 },
        { weight: 100, reps: 12 },
        { weight: 100, reps: 12 },
        { weight: 100, reps: 12 },
        { weight: 50, reps: 15 },
      ],
    },
    {
      name: "Bicep Curl",
      sets: [
        { weight: 100, reps: 12 },
        { weight: 100, reps: 12 },
        { weight: 100, reps: 12 },
        { weight: 100, reps: 12 },
        { weight: 60, reps: 12 },
      ],
    },
  ],
};
