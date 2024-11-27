import { Outlet } from "react-router"
import { RideContextProvider } from "./assets/context/RideContext"

function App() {

  return (
    <div className='app'>
      <RideContextProvider>
        <Outlet />
      </RideContextProvider>
    </div>
  )
}

export default App
