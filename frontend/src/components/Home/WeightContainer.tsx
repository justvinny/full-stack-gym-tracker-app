import { Box, Button } from "@mui/material";
import DashboardGauge from "./DashboardGauge";

interface Props {
  startWeight: number;
  currentWeight: number;
  goalWeight: number;
}

const WeightContainer = ({ startWeight, currentWeight, goalWeight }: Props) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "0px 0px 5px 2px",
      padding: "16px",
      marginBottom: "12px",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "stretch",
        alignItems: "center",
      }}
    >
      <Box>Weight Goals (kg)</Box>
      <Button variant="text" style={{ textTransform: "none" }}>
        Edit
      </Button>
    </Box>
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
      }}
    >
      <DashboardGauge weight={startWeight} label="Start Weight" />
      <DashboardGauge weight={currentWeight} label="Current Weight" />
      <DashboardGauge weight={goalWeight} label="Goal Weight" />
    </Box>
  </Box>
);

export default WeightContainer;
