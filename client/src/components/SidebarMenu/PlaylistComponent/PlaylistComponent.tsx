const PlaylistComponent = () => {

    return (
        <>
            
                <div className="overflow-x-auto h-96 rounded-box mt-2">
                    <table className="table table-pin-rows">
                        <thead>
                            <tr>
                                <th>
                                    <button className="btn">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            />
                                        </svg>
                                        La tua Playlist
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