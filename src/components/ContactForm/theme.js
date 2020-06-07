import { createMuiTheme } from "@material-ui/core";
import { colors } from "../../global";

const theme = createMuiTheme({
    palette: {
        primary:  {
            main: `${colors.grey}`,
        },
        secondary: {
            main: `${colors.red}`
        }
    },
    typography: {
        fontFamily: [
            'menloregular',
            'Times New Roman'
        ]
    }
})

export default theme 