import { Box } from "@mui/material";
import { bgColor } from "../../defaults";

interface Props {
  weight: number;
  label: string;
  reps?: number;
}

const DashboardGauge = ({ weight, label, reps }: Props) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "150px",
      width: "150px",
      padding: "5px",
      borderRadius: "50%",
      border: `8px solid ${bgColor}`,
      margin: "8px",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100px",
        width: "100px",
        padding: "16px",
        borderRadius: "50%",
        border: `4px solid ${bgColor}`,
      }}
    >
      <Box sx={{ fontSize: 40, fontWeight: "bold" }}>{weight}</Box>
      {reps ? <Box sx={{ fontSize: 14, fontWeight: "bold" }}>{reps} reps</Box> : <></>}
      <Box sx={{ fontSize: 14, fontWeight: "bold" }}>{label}</Box>
    </Box>
  </Box>
);

export default DashboardGauge;
