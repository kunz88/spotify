import { faBookBookmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PlaylistComponent = () => {

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