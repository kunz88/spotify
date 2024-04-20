import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import SidebarMenu from "./components/SidebarMenu/SidebarMenu"
import SideListSection from "./components/SideList/SideListSection/SideListSection"
/* import useSpotifyToken from "./hooks/useSpotifyToken" */
import PlayerComponent from "./components/PlayerComponent/PlayerComponent"
import useSpotifySDKtoken from "./hooks/useSpotifySDKtoken"
import LoginSDK from "./components/Authentication/Login/LoginSDK"




function App() {

  useSpotifySDKtoken()
  const token = localStorage.getItem("spotifyToken")
  console.log(token)

  return (
    <> {!token ? <LoginSDK/> :
    
    <section className="flex space-x-4 place-content-between p-2">
      <section>
        <SidebarMenu />
      </section>

      <SideListSection>
        <NavBar />
        <Outlet />
        <PlayerComponent />
        <Footer />
      </SideListSection>


    </section>}


    </>
  )
}

export default App
