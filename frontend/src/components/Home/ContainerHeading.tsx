import { Box, Button } from "@mui/material";

interface Props {
  label: string;
}

const ContainerHeading = ({ label }: Props) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignSelf: "stretch",
      alignItems: "center",
    }}
  >
    <Box>{label}</Box>
    <Button variant="text" style={{ textTransform: "none" }}>
      Edit
    </Button>
  </Box>
);

export default ContainerHeading;
