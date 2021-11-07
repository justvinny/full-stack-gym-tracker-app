import { Box, Button } from "@mui/material";

interface Props {
  label: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContainerHeading = ({ label, setOpen }: Props) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignSelf: "stretch",
      alignItems: "center",
    }}
  >
    <Box sx={{ fontWeight: "bold" }}>{label}</Box>
    <Button
      variant="text"
      style={{ textTransform: "none" }}
      onClick={() => setOpen(true)}
    >
      Edit
    </Button>
  </Box>
);

export default ContainerHeading;
