import { useState } from "react";
import { Grid } from "@mui/material";
import InfoContainer from "../components/Home/InfoContainer";
import WeightContainer from "../components/Home/WeightContainer";
import ExercisesContainer from "../components/Home/ExercisesContainer";
import RecentWorkoutContainer from "../components/Home/RecentWorkoutContainer";
import { Workout, Routine, User, FeaturedExercises } from "../types";
import EditInfoDialog from "../components/Home/Dialogs/EditInfoDialog";
import EditWeightDialog from "../components/Home/Dialogs/EditWeightDialog";
import EditFeaturedDialog from "../components/Home/Dialogs/EditFeaturedDialog";

const HomePage = () => {
  // User object
  // Needs to be changed once backend is connected.
  // Might use context to get user data which is fetched after log in.
  // eslint-disable-next-line
  const [user, setUser] = useState(mockUser);

  // Basic Info
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [height, setHeight] = useState(user.height);
  const [aboutMe, setAboutMe] = useState(user.aboutMe);

  // Weight goals
  const [startWeight, setStartWeight] = useState(user.startWeight);
  const [currentWeight, setCurrentWeight] = useState(user.currentWeight);
  const [goalWeight, setGoalWeight] = useState(user.goalWeight);

  // Best exercises
  const [featuredExercises, setFeaturedExercises] = useState(
    user.featuredExercises
  );

  // Latest workout
  // eslint-disable-next-line
  const [lastWorkout, setLastWorkout] = useState(user.routines[0].workouts[0]);

  // Modal
  const [openEditInfo, setOpenEditInfo] = useState(false);
  const [openEditWeight, setOpenEditWeight] = useState(false);
  const [openEditFeatured, setOpenEditFeatured] = useState(false);

  return (
    <>
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
          marginLeft: "0px",
        }}
      >
        <InfoContainer
          name={name}
          age={age}
          height={height}
          aboutMe={aboutMe}
          setOpen={setOpenEditInfo}
        />
        <Grid item xs={12} lg={7} sx={{ padding: "0px !important" }}>
          <WeightContainer
            startWeight={startWeight}
            currentWeight={currentWeight}
            goalWeight={goalWeight}
            setOpen={setOpenEditWeight}
          />
          <ExercisesContainer
            featuredExercises={featuredExercises}
            setOpen={setOpenEditFeatured}
          />
        </Grid>
        <RecentWorkoutContainer lastWorkout={lastWorkout} />
      </Grid>
      {/* Edit Dialogs */}
      <EditInfoDialog
        open={openEditInfo}
        setOpen={setOpenEditInfo}
        name={name}
        age={age}
        height={height}
        aboutMe={aboutMe}
        setName={setName}
        setAge={setAge}
        setHeight={setHeight}
        setAboutMe={setAboutMe}
      />
      <EditWeightDialog
        open={openEditWeight}
        setOpen={setOpenEditWeight}
        startWeight={startWeight}
        currentWeight={currentWeight}
        goalWeight={goalWeight}
        setStartWeight={setStartWeight}
        setCurrentWeight={setCurrentWeight}
        setGoalWeight={setGoalWeight}
      />
      <EditFeaturedDialog
        open={openEditFeatured}
        setOpen={setOpenEditFeatured}
        featuredExercises={featuredExercises}
        setFeaturedExercises={setFeaturedExercises}
        routines={user.routines}
      />
    </>
  );
};

export default HomePage;

const mockFeaturedExercises: FeaturedExercises = [
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
  undefined,
];

const mockWorkout1: Workout = {
  day: "Workout Sample 1",
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

const mockWorkout2 = {
  day: "Workout Sample 2",
  exercises: [
    {
      name: "Lat Pulldown",
      sets: [
        { weight: 110, reps: 12 },
        { weight: 110, reps: 12 },
        { weight: 110, reps: 12 },
        { weight: 110, reps: 12 },
      ],
    },
    {
      name: "Weighted Cable Curl",
      sets: [
        { weight: 50, reps: 12 },
        { weight: 50, reps: 12 },
        { weight: 50, reps: 12 },
        { weight: 50, reps: 12 },
      ],
    },
    {
      name: "Shoulder Press",
      sets: [
        { weight: 70, reps: 10 },
        { weight: 70, reps: 10 },
        { weight: 70, reps: 10 },
        { weight: 70, reps: 10 },
      ],
    },
    {
      name: "Pullups",
      sets: [
        { weight: 20, reps: 15 },
        { weight: 20, reps: 15 },
        { weight: 20, reps: 14 },
      ],
    },
  ],
};

const mockRoutine: Routine = {
  name: "Routine Sample",
  workouts: [mockWorkout1, mockWorkout2],
};

const mockUser: User = {
  name: "Giga Chad",
  age: 25,
  height: 185,
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis nibh eros. Suspendisse eu lectus id ex placerat posuere. Mauris non imperdiet sem, id convallis nisi. Vivamus porttitor eros in erat ornare, eget convallis lectus ullamcorper. Sed augue arcu, dignissim nec orci in, ullamcorper volutpat justo. Fusce ullamcorper ante nec metus ultricies, in imperdiet nisl tincidunt. Fusce sed dolor vel ligula fringilla ornare sit amet vel est. Curabitur rutrum arcu vitae dolor porta, eu venenatis lacus iaculis. Integer tortor augue, malesuada a ex non, varius suscipit leo. Pellentesque laoreet lacus a maximus viverra. Phasellus condimentum, leo sit amet suscipit semper, orci est volutpat lectus, nec suscipit turpis nisi ut purus. ",
  startWeight: 90,
  currentWeight: 95,
  goalWeight: 100,
  featuredExercises: mockFeaturedExercises,
  routines: [mockRoutine],
};
