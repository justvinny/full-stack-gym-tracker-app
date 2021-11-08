import { Box } from "@mui/material";

interface Props {
  label: string;
  content: string;
}

const InfoText = ({ label, content }: Props) => {
  return (
    <Box sx={{ display: "inline", textAlign: "justify" }}>
      <Box sx={{ display: "inline", fontWeight: "bold" }}>{label}</Box>{" "}
      {content}
    </Box>
  );
};

export default InfoText;
