import { useState } from "react"
import MqttRemote from "./components/MqttRemote"

enum Pages {
  remote="remote",
  pupfood="pupfood",
}
const App: React.FC = () => {
  const [page, setPage] = useState(Pages.remote)

  return (
    {
      [Pages.remote]: <MqttRemote />,
      [Pages.pupfood]: <div>TODO</div>,
    }[page]
  )
}

export default App
