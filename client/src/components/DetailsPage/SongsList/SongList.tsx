import useFetch from "../../../hooks/useFetch"
import { TrackList } from "../models/artist";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import HearthComponent from "./HearthComponent/HearthComponent";


type SongsListProps = {
  token: string,
  id?: string
}

const SongsList = ({ id, token }: SongsListProps) => {




  const { isFetching, data, error } = useFetch<TrackList>(`https://api.spotify.com/v1/artists/${id}/top-tracks`, token)










  if (isFetching) {
    return <LoadingSkeleton />

  }

  error && <h1>error</h1>
  return (

    <table className="table mb-3">
      <thead>
        <tr>
          <th></th>
          <th>Album</th>
          <th>Titolo</th>
          <th>Popolarità</th>
          <th>Durata</th>
        </tr>
      </thead>
      <tbody>


        
        {data?.tracks.map((track, index) => <tr
          key={index}
          className="hover:bg-slate-800 transition ease-in-out"
       

        >
          <th>{index + 1}</th>
          <td><img src={track.album.images[2].url}></img></td>
          <td>{track.name}</td>

          <td>
            {track.popularity + "%"}
          </td>
          <td>{(track.duration_ms / 100000).toFixed(2)}</td>
          <td>
            <HearthComponent/>

          </td>
        </tr>)}
      </tbody>
    </table>
  )

}
export default SongsList