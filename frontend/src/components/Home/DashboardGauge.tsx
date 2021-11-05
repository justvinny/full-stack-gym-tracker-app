import { Box } from "@mui/material";
import { bgColor } from "../../defaults";

interface Props {
  weight?: number;
  label?: string;
  reps?: number;
}

const DashboardGauge = ({ weight, label, reps }: Props) => {
  const render = () => {
    if (weight === undefined && label === undefined && reps === undefined) {
      return <Box sx={{ fontSize: 40, fontWeight: "bold" }}>-</Box>;
    } else if (reps === undefined) {
      return (
        <>
          <Box sx={{ fontSize: 40, fontWeight: "bold" }}>{weight}</Box>
          <Box sx={{ fontSize: 14, fontWeight: "bold" }}>{label}</Box>
        </>
      );
    }
    return (
      <>
        <Box sx={{ fontSize: 40, fontWeight: "bold" }}>{weight}</Box>
        <Box sx={{ fontSize: 14, fontWeight: "bold" }}>{reps} reps</Box>
        <Box sx={{ fontSize: 14, fontWeight: "bold" }}>{label}</Box>
      </>
    );
  };

  return (
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
        {render()}
      </Box>
    </Box>
  );
};
export default DashboardGauge;
