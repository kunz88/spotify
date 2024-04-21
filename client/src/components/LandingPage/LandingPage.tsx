
import FormSection from "../Authentication/FormSection/FormSection"
import NavBarBase from "../NavBar/NavBarBase"

const LandingPage = () => {

        
   


    return (

        <FormSection>
            <NavBarBase />
            <header>
                <div className="hero h-full bg-gradient-to-r from-green-500 gray-900">
                    <div className="hero-content flex-col  justify-self-start">
                        <span className="relative flex h-10 w-10">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <img className="animate-bounce" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"></img>
                        </span>

                        <h1 className="text-8xl font-bold text-white mb-4">
                            Visita Spotify
                        </h1>

                        <a className="btn-link font-bold text-2xl" href="http://localhost:3000/auth/login" >
                            Login with Spotify
                        </a>
                    </div>
                </div>
            </header>
        </FormSection>
    )
}
export default LandingPage