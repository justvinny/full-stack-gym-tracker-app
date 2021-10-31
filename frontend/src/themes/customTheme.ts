import { createTheme } from "@mui/material/styles";
import { bgColor } from "../defaults";

const myTheme = createTheme({
  palette: {
    primary: {
      main: bgColor,
    },
  },
});

const customTheme = { myTheme };
export default customTheme;
