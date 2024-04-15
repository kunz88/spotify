import { Link } from "react-router-dom"

const NavBarBase = () => {
    return (
        <div
        className="navbar bg-base-100 h-20 z-50 rounded-t-md nav-custom fixed nav-costum"
      >
        <div>
          <Link className="btn btn-ghost font-bold text-white justify-start" to="/">
            
              <img
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
                alt="Spotify"
                className="w-32" />
          </Link>
        </div>
      </div>
    )
}
export default NavBarBase