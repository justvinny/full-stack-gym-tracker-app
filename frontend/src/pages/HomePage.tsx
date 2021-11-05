import { useState } from "react";
import { Grid } from "@mui/material";
import InfoContainer from "../components/Home/InfoContainer";
import WeightContainer from "../components/Home/WeightContainer";
import ExercisesContainer from "../components/Home/ExercisesContainer";
import RecentWorkoutContainer from "../components/Home/RecentWorkoutContainer";
import { Workout, Exercise } from "../types";

const HomePage = () => {
  // Basic Info
  const [name, setName] = useState("Giga Chad");
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(185);
  const [aboutMe, setAboutMe] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis nibh eros. Suspendisse eu lectus id ex placerat posuere. Mauris non imperdiet sem, id convallis nisi. Vivamus porttitor eros in erat ornare, eget convallis lectus ullamcorper. Sed augue arcu, dignissim nec orci in, ullamcorper volutpat justo. Fusce ullamcorper ante nec metus ultricies, in imperdiet nisl tincidunt. Fusce sed dolor vel ligula fringilla ornare sit amet vel est. Curabitur rutrum arcu vitae dolor porta, eu venenatis lacus iaculis. Integer tortor augue, malesuada a ex non, varius suscipit leo. Pellentesque laoreet lacus a maximus viverra. Phasellus condimentum, leo sit amet suscipit semper, orci est volutpat lectus, nec suscipit turpis nisi ut purus. "
  );

  // Weight goals
  const [startWeight, setStartWeight] = useState(90);
  const [currentWeight, setCurrentWeight] = useState(95);
  const [goalWeight, setGoalWeight] = useState(100);

  // Best exercises
  const [featuredExercises, setFeaturedExercises] = useState(
    mockFeaturedExercises
  );

  // Latest workout
  const [lastWorkout, setLastWorkout] = useState(mockWorkout);

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
      <InfoContainer name={name} age={age} height={height} aboutMe={aboutMe} />
      <Grid item xs={12} lg={7} sx={{ padding: "0px !important" }}>
        <WeightContainer
          startWeight={startWeight}
          currentWeight={currentWeight}
          goalWeight={goalWeight}
        />
        <ExercisesContainer featuredExercises={featuredExercises} />
      </Grid>
      <RecentWorkoutContainer lastWorkout={lastWorkout} />
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

const mockFeaturedExercises: [Exercise, Exercise, Exercise] = [
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
];
