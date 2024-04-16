import useFetch from "../../../hooks/useFetch"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { TrackList } from "../model";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";


type SongsListProps = {
    token:string,
    id?:string 
}

const SongsList = ({id,token}:SongsListProps) => {




    const {isFetching,data,error} = useFetch<TrackList>(`https://api.spotify.com/v1/artists/${id}/top-tracks`,token)



    
    
    
    
    
    
    
    if(isFetching) {
        return <LoadingSkeleton/>

    }  

    error && <h1>error</h1>
    return(
        
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
          
          
          
          {data?.tracks.map((track,index) => <tr
            v-for="(song, index) in otherSongs"
            key={index}
            className="hover:bg-slate-500"
         
          >
            <th>{index+1 }</th>
            <td><img src={track.album.images[0].url}  width="50" height="50"></img></td>
            <td>{track.name }</td>
            
            <td>
              {track.popularity + "%"}
            </td>
            <td>{(track.duration_ms/100000).toFixed(2)}</td>
            <td>
              <a><FontAwesomeIcon icon={faHeart} size='lg' /></a>
            </td>
          </tr>)}
        </tbody>
      </table>
    )

}
export default SongsList