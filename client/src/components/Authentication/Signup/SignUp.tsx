import { ChangeEvent, FormEvent, useState } from "react"
import CustomButton from "../../CustomButton/CustomButton"
import FormSection from "../FormSection/FormSection"
import "./SignUp.scss"
import { UserKey, UserType } from "../model/user"
import agent from "../../../utils/agent"
import { useNavigate } from "react-router-dom";
        

const SignUp = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState('typing');
    const [user, setUser] = useState<UserType>({
        name: "",
        email: "",
        avatar: "",
        password: "",
    })

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => { // tipo ufficiale dell'evento onChange dell'input type
        const { name, value } = event.target
        setUser({
            ...user,
            [name]: value.trim(),// per ogni chiave inserisco un valore in base al name dell'input
        })
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setStatus('submitting');
        console.log(user)
        try {
            agent.SignIn.signin(user)
            setStatus('success')
            navigate("/auth/login")

        } catch (err) {
            setStatus('typing');
            console.log(err)
        }finally{
            Object.keys(user).forEach((inputName: string) => (user[inputName as UserKey] = ""));


                
    

        }



        console.log("submit")
    }

    return (


        status === "submitting" ? <div className="loading-lg h-screen min-w-full flex justify-center"><span className="loading loading-dots w-10"></span></div> :

            <FormSection>
                <form className="form-container self-center" onSubmit={handleSubmit} id="signup">
                    <h1 className="text-4xl leading-10 font-bold text-white mt-8 mb-8 ml-3.5">Iscriviti per iniziare ad ascoltare</h1>
                    <label className="input input-bordered flex items-center gap-4 w-full max-w-xs" id="name">
                        Name
                        <input
                            name="name"
                            value={user.name}
                            type="text"
                            className="grow"
                            placeholder="Kunz"
                            required
                            onChange={handleInputChange}
                        />
                    </label>
                    <label className="input input-bordered input-primary flex items-center gap-4 w-full max-w-xs" id="email">
                        Email
                        <input
                            name="email"
                            value={user.email}
                            type="text"
                            className="grow"
                            placeholder="kunz@site.com"
                            required
                            onChange={handleInputChange}
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-4 w-full max-w-xs" id="avatar">
                        <input
                            name="avatar"
                            value={user.avatar}
                            type="text"
                            className="grow"
                            placeholder="Avatar"
                            onChange={handleInputChange}
                        />
                        <span className="badge badge-info mr-1">Optional</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-4 w-full max-w-xs" id="password">
                        <input
                            name="password"
                            value={user.password}
                            type="password"
                            className="grow"
                            placeholder="password"
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <CustomButton type="submit" text="Submit" name="Submit" color="btn-primary" />
                    <div className="divider">oppure</div>
                    <button className="btn btn-outline">
                        Accedi con Facebook
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
                </form>
            </FormSection>


    )
}
export default SignUp