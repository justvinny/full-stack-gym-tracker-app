import { Box } from "@mui/material";
import DashboardGauge from "./DashboardGauge";
import ContainerHeading from "./ContainerHeading";
import { Exercise } from "../../types";

interface Props {
  featuredExercises: [
    Exercise | undefined,
    Exercise | undefined,
    Exercise | undefined
  ];
}

const ExercisesContainer = ({ featuredExercises }: Props) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      boxShadow: "0px 0px 5px 2px",
      alignItems: "center",
      padding: "16px",
      marginBottom: "12px",
    }}
  >
    <ContainerHeading label="Best Exercises (kg)" />
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
      }}
    >
      {featuredExercises.map((exercise) => {
        if (exercise !== undefined) {
          return (
            <DashboardGauge
              weight={exercise.sets[exercise.sets.length - 1].weight}
              label={exercise.name}
              reps={exercise.sets[exercise.sets.length - 1].reps}
            />
          );
        }
        return <DashboardGauge />;
      })}
    </Box>
  </Box>
);

export default ExercisesContainer;
