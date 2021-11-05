import { Box } from "@mui/material";
import DashboardGauge from "./DashboardGauge";
import ContainerHeading from "./ContainerHeading";

const ExercisesContainer = () => (
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
      <DashboardGauge weight={130} label="Bench Press" reps={12} />
      <DashboardGauge weight={0} label="Pull Up" reps={20} />
      <DashboardGauge weight={200} label="Deadlift" reps={5} />
    </Box>
  </Box>
);

export default ExercisesContainer;
