import { createMuiTheme } from "@material-ui/core";
import { bgColor } from "../defaults";

const myTheme = createMuiTheme({
    palette: {
        primary: {
            main: bgColor
        }
    }
});

const customTheme = {myTheme}
export default customTheme;