import { Box } from "@mui/material";
import { bgColor, textColor } from "../defaults";

interface Props {
  title: string;
}

const PageTitleHeader = ({ title }: Props) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "start",
      border: "1px solid black",
      borderRadius: "5px",
      marginBottom: "10px",
      bgcolor: bgColor,
      color: textColor,
    }}
  >
    <Box
      sx={{
        fontSize: "h4.fontSize",
        fontFamily: "Impact",
        letterSpacing: 1.5,
        padding: "25px",
      }}
    >
      {title}
    </Box>
  </Box>
);

export default PageTitleHeader;
