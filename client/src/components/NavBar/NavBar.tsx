import { Link } from "react-router-dom"
import CustomButton from "../CustomButton/CustomButton"
import "./NavBar.scss"
import { useDispatch, useSelector } from "react-redux"
import { State } from "../../store/store"
import { setIsLogged, toggleIsLogged } from "../../SliceContext/loginSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"

const NavBar = () => {
    const userState = useSelector((state:State)=> state.user.value.user)
    const dispatch = useDispatch()

    // setto lo stato di login utilizzando il dispatcher,esso controlla il token di login
    dispatch(setIsLogged())

    const isLogged = useSelector((state: State) => state.login.value)
    return (
        <>
            <div
                className="bg-base-100 h-16 z-50 sticky top-0 right-0 nav-costum"
            >
                <nav>
                    <button className="join-item btn">«</button>
                    <button className="join-item btn">»</button>
                </nav>
                {isLogged ?  // se sono loggato mostro i dati utente
                
                <div className="avatar flex items-center gap-3">
                    <p className="text-neutral-400 text-lg font-bold capitalize">{userState.name}</p>
                    <div className="w-14 rounded-full">
                        <img
                            src={userState.avatar}
                        />
                    </div>
                    <button className="btn btn-link"onClick={()=>{dispatch(toggleIsLogged())}}>Logout <FontAwesomeIcon icon={faRightFromBracket} /></button>
                </div> :
                // altrimenti  i nav di login e signup
                
                <nav>

                    <ul className="menu menu-horizontal justify-end">
                        <li><Link to="auth/signup"
                        ><CustomButton name="Iscriviti" color="btn-link" /></Link></li>

                        <li><Link to="auth/login"
                        ><CustomButton name="Accedi" color="btn" /></Link></li>
                    </ul>
                </nav>}

            </div>
        </>

    )
}
export default NavBar



