import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const MenuComponent = () => {

    return (
        <>
          <ul className="menu bg-base-100  rounded-box text-lg">
    <li>
      <a className="btn btn-ghost font-bold text-white justify-start"
        ><img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
          alt="Spotify"
          className="w-20"
      /></a>
    </li>
    <li>
      <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        Home
      </Link>
    </li>
    <li>
      <Link to="search">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
        Search
      </Link>
    </li>
  </ul></>
    )
}
export default MenuComponent