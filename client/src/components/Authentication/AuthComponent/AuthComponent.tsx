import { Outlet } from "react-router-dom"
import FooterBottom from "../../Footer/FooterBottom"
import NavBarBase from "../../NavBar/NavBarBase"

const AuthComponent = () => {

    return(<>
    <NavBarBase/>
    <Outlet/>
    <FooterBottom/>
    
    </>)
}
export default AuthComponent