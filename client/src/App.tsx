import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import SidebarMenu from "./components/SidebarMenu/SidebarMenu"
import SideListSection from "./components/SideList/SideListSection/SideListSection"
import PlayerComponent from "./components/PlayerComponent/PlayerComponent"
import useSpotifyToken from "./hooks/useSpotifyToken"
import useSpotifySDKtoken from "./hooks/useSpotifySDKtoken"







function App() {

  useSpotifySDKtoken()
  const token = localStorage.getItem("spotifyToken")
  // setta il token temporaneo, utilizzato per navigare nella pagina senza auth
  useSpotifyToken()


  return (
    <>
    <section className="flex space-x-4 place-content-between p-2">
      <section>
        <SidebarMenu />
      </section>
      <SideListSection>
        <NavBar />
        <Outlet />
        {token && <PlayerComponent />}
        <Footer />
      </SideListSection>
    </section>


    </>
  )
}

export default App
