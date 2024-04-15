import { Outlet } from "react-router-dom"
import useSpotifyToken from "./hooks/useSpotifyToken"
import NavBar from "./components/NavBar/NavBar"



function App() {
  useSpotifyToken()

  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  )
}

export default App
