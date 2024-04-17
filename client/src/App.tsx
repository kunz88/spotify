import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import SidebarMenu from "./components/SidebarMenu/SidebarMenu"
import SideListSection from "./components/SideList/SideListSection/SideListSection"
import useSpotifyToken from "./hooks/useSpotifyToken"




function App() {
  
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
          <Footer />
        </SideListSection>


      </section>

    </>
  )
}

export default App
