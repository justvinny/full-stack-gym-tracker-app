import { Box, Button } from "@mui/material";
import DashboardGauge from "./DashboardGauge";

const WeightContainer = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: {md: "8px"}
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
      <DashboardGauge weight={110} label="Start Weight" />
      <DashboardGauge weight={100} label="Current Weight" />
      <DashboardGauge weight={90} label="Goal Weight" />
    </Box>
  </Box>
);

export default WeightContainer;
