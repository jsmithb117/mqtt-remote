import { useState } from "react"
import MqttRemote from "./components/MqttRemote"
import { AppBar, Box, Button, ButtonGroup, Toolbar, useTheme } from "@mui/material"
import PupFood from "./components/PupFood"


enum Pages {
  remote = "Remote",
  pupfood = "PupFood",
}
const App: React.FC = () => {
  const [page, setPage] = useState(Pages.remote)
  const theme = useTheme()

  const buttonStyles = {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  }

  const navButtonHandler = (page: Pages) => () => setPage(page)
  return (
    <main>
      <header>
        <Box>
          <AppBar
            sx={{ justifyContent: "center", alignItems: "center" }}
            position="sticky"
          >
            <Toolbar>
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button
                  sx={buttonStyles}
                  color="inherit"
                  onClick={() => navButtonHandler(Pages.remote)()}
                >
                  {Pages.remote}
                </Button>
                <Button
                  sx={buttonStyles}
                  color="inherit"
                  onClick={() => navButtonHandler(Pages.pupfood)()}
                >
                  {Pages.pupfood}
                </Button>
              </ButtonGroup>
            </Toolbar>
          </AppBar>
        </Box>
      </header>
      <body>
      {{
        [Pages.remote]: <MqttRemote />,
        [Pages.pupfood]: <PupFood />,
      }[page]}
      </body>
    </main>
  )
}

export default App
