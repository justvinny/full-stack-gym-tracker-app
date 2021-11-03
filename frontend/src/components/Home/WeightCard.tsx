import { Box } from "@mui/material";
import { bgColor } from "../../defaults";

interface Props {
  weight: number;
  label: string;
}

const WeightCard = ({ weight, label }: Props) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "250px",
      width: "250px",
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
        height: "200px",
        width: "200px",
        padding: "16px",
        borderRadius: "50%",
        border: `4px solid ${bgColor}`,
      }}
    >
      <Box sx={{ fontSize: 100 }}>{weight}</Box>
      <Box sx={{ fontWeight: "bold" }}>{label}</Box>
    </Box>
  </Box>
);

export default WeightCard;
