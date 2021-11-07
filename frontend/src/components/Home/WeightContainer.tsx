import { Box } from "@mui/material";
import DashboardGauge from "./DashboardGauge";
import ContainerHeading from "./ContainerHeading";

interface Props {
  startWeight: number;
  currentWeight: number;
  goalWeight: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const WeightContainer = ({
  startWeight,
  currentWeight,
  goalWeight,
  setOpen,
}: Props) => (
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
    <ContainerHeading label="Weight Goals (kg)" setOpen={setOpen} />
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
