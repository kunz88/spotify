import { Outlet } from "react-router-dom"
import useSpotifyToken from "./hooks/useSpotifyToken"
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"



function App() {
  useSpotifyToken()

  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
