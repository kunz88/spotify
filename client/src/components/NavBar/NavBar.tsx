import { Link } from "react-router-dom"
import CustomButton from "../CustomButton/CustomButton"
import "./NavBar.scss"

const NavBar = () => {
    return (
        <>
            <div
                className="bg-base-100 h-16 z-50 nav-custom sticky top-0 right-0 nav-costum"
            >
                <nav>
                    <button className="join-item btn">«</button>
                    <button className="join-item btn">»</button>
                </nav>
                {/*                 <div v-if="store.logged.isLogged" className="avatar flex items-center gap-3">
                <p className="text-neutral-400 text-lg font-bold capitalize">{{!store.logged.isLoading ? store.getUser.user : "Loading.."}}</p>
                <div className="w-14 rounded-full">
                    <img
                        src="https://quifinanza.it/wp-content/uploads/sites/5/2024/02/Quanto-costano-i-funerali-di-Carlo-III.jpg"
                    />
                </div>
                <a className="btn btn-ghost" Onclick="logout">Logout</a>
            </div> */}
                <nav>

                    <ul className="menu menu-horizontal justify-end">
                        <li><Link to="auth/login"
                        ><CustomButton name="Iscriviti" color="btn-link" /></Link></li>

                        <li><Link to="auth/signup"
                        ><CustomButton name="Accedi" color="btn" /></Link></li>
                    </ul>
                </nav>
            </div>
        </>

    )
}
export default NavBar



