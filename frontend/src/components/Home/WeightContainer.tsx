import { Box } from "@mui/material";
import WeightCard from "./WeightCard";

const WeightContainer = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
    }}
  >
    <WeightCard weight={110} label="Start Weight" />
    <WeightCard weight={100} label="Current Weight" />
    <WeightCard weight={90} label="Goal Weight" />
  </Box>
);

export default WeightContainer;
