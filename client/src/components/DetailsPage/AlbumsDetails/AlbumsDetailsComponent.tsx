import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { Album } from "../models/album";





const DetailsComponent = () => {

  const token = String(localStorage.getItem("spotifyTemporaryToken"))


  const { id } = useParams();
  const { isFetching, data, error } = useFetch<Album>(`https://api.spotify.com/v1/albums/${id}`, token)


  if (isFetching) {
    return <div className="h-screen min-w-full loading-lg h-screen min-w-full flex justify-center"><span className="loading loading-dots w-10"></span></div>
  }

  if (error || !data) {
    return <h1>error</h1>
  }


  return (<>
    <div className="hero min-h-96 bg-gradient-to-r from-stone-500 gray-900">
      <div className="hero-content flex-col lg:flex-row-reverse justify-self-start">
        <img src={data?.images[0].url} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <p className="flex mb-1 text-sm text-white">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7641/7641727.png"
              className="rounded-lg w-6"
            />Artista verificato
          </p>
          <h1 className="text-8xl font-bold text-white">{data?.name}</h1>
          <h3 className="p-2 text-3xl font-bold">{data.artists[0].name}</h3>
          <p className="p-2  font-bold">
            Data rilascio {data.release_date}
          </p>
          <p className=" p-2  font-bold">Numero tracce {data.total_tracks}</p>

          
        </div>
      </div>
    </div>
    <div className="flex p-4 gap-4 border-gray-900 border-t-2 border-solid">
      <button className="btn btn-primary join-item btn-player animate-bounce">
        <FontAwesomeIcon icon={faPlay} size='lg' />
      </button>
      <button className="btn btn-outline ">Segui</button>
      <button className="disabled" /* tabIndex=1  */ aria-disabled="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
    <div className="overflow-x-auto">



    </div>
  </>

  )

}
export default DetailsComponent