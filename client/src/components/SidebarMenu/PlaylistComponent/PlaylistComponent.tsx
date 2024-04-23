import { faBookBookmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from "react-redux"
import { State } from "../../../store/store"

const PlaylistComponent = () => {
    const listFavoutites = useSelector((state:State)=> state.playlist.value)

    return (
        <>
            
                <div className="overflow-x-auto h-96 rounded-box mt-2">
                    <table className="table table-pin-rows">
                        <thead>
                            <tr>
                                <th>
                                    <button className="btn">
                                    <FontAwesomeIcon icon={faBookBookmark} />
                                        La tua Libreria
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {listFavoutites.map((song,index)=> <tr key={index}><td>{song}</td></tr>)}
                            {/* <tr v-for="item in store.listFavourites">
            <td>{{ item }}</td>
          </tr> */}

                        </tbody>
                    </table>
                </div>
            </>
            )
}
export default PlaylistComponent