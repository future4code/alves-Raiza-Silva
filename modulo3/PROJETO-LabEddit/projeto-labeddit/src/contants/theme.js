import { createMuiTheme } from '@material-ui/core/styles';
import { colorPrimary, colorNeutro } from './coloors';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: colorPrimary,
      contrastText: "white"
    },
    text: {
        primary: colorNeutro
    }

  }
})
export default theme 