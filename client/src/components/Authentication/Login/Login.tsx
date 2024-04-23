import { Link, useNavigate } from "react-router-dom"
import CustomButton from "../../CustomButton/CustomButton"
import FormSection from "../FormSection/FormSection"
import "./Login.scss"
import { ChangeEvent, FormEvent, useState } from "react"
import { UserResponse, UserType } from "../model/user"
import agent from "../../../utils/agent"
import { useDispatch } from "react-redux"
import { setUserState } from "../../../SliceContext/userSlice"

const Login = () => {

  const dispach = useDispatch()

  //TODO fare un hook unico per l'autenticazione
  const navigate = useNavigate();
  const [status, setStatus] = useState('typing');
  const [user, setUser] = useState<UserType>({
    email: "",
    password: "",
  })



  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => { // tipo ufficiale dell'evento onChange dell'input type
    const { name, value } = event.target
    setUser({
      ...user,
      [name]: value,// per ogni chiave inserisco un valore in base al name dell'input
    })
    console.log(user)

  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting');
    try {
      setTimeout(async () => {
        console.log(user)
        const userData:UserResponse = await agent.SignUp.signup(user)
        console.log(userData) // da utilizzare in uno stato globale con redux
        dispach(setUserState(userData.user))
        alert(`ciao ${userData.user.name}`)
        localStorage.setItem("userToken",userData.token)
        navigate("/");
      }, 1000)

      setStatus('success');
    } catch (err) {
      setStatus('typing');
      console.log(err)
    } finally {
      console.log("submit")
    }
  }

  return (
    status === "submitting" ? <div className="loading-lg h-screen min-w-full flex justify-center"><span className="loading loading-dots w-10"></span></div> :

      <FormSection>
        <form className="form-container self-center" onSubmit={handleSubmit} id="login">
          <h1 className="text-4xl leading-10 font-bold text-white mb-8 text-center">
            Accedi a Spotify
          </h1>
          <button className="btn btn-outline">
            Continua con Facebook
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              ></path>
            </svg>
          </button>
          <button className="btn btn-outline">
            Continua con Youtube
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
              ></path>
            </svg>
          </button>
          <div className="divider"></div>
          <label
            className="input input-bordered input-primary flex items-center gap-4 w-full max-w-xs"
            id="email"
          >
            Email
            <input
              name="email"
              type="text"
              className="grow"
              placeholder="kunz@site.com"
              required
              value={user.email}
              onChange={handleInputChange}
            />
          </label>
          <label
            className="input input-bordered flex items-center gap-4 w-full max-w-xs"
            id="password"
          >
            <input
              name="password"
              type="password"
              className="grow"
              placeholder="password"
              value={user.password}
              onChange={handleInputChange}
              required
            />
          </label>
          <div className="flex p-5 items-center"> <p>Non hai un account?</p><Link to="/auth/signup"
          ><CustomButton name="Iscriviti" color="btn-link" />
          </Link></div>



          <CustomButton
            type="submit"
            text="Submit"
            name="Submit"
            color="btn-primary"
          />
        </form>
      </FormSection>

  )
}
export default Login