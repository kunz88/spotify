import { BaseSyntheticEvent, useEffect, useState } from "react"

import ArtistsResult from "../../model/artistQuery"
import axios from "axios"
import AlbumType from "./model/albumType"
import SearchCard from "./SearchCard/SearchCard"
import "./SearchComponent.scss"
import { debounce } from 'lodash'
import Scheleton from "../commons/LoadingComponent/Scheleton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const SearchComponent = () => {
    const [searchInput, setSearchInput] = useState<string>("")
    const [albumList, setAlbumList] = useState<AlbumType | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [hasError, setHasError] = useState<boolean>(false)

    const handleInputChange = (event: BaseSyntheticEvent) => { // tipo ufficiale dell'evento onChange dell'input type
        if (event.target.value.length > 4) {
            setSearchInput(event.target.value)
        }
    }
    useEffect(() => { 

        const token = localStorage.getItem("spotifyTemporaryToken")

        if(!token){
            setHasError(true)
            return
        }
        // provare a rendere asincrona la funzione, in modo da ottimizzare le chiamate 
        const getAlbums = async (artistName: string) => {
            setAlbumList(null)
            if (!artistName) {
                return
            }
            const requestUrl = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;
            const requestHeadears = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}}`,
                },
            };

            try {

                setTimeout(async () => {
                setIsLoading(true)
                const response = await axios.get<ArtistsResult>(requestUrl, requestHeadears)
                const artistId = response.data.artists.items[0].id
    
                const albumResponse = await axios.get<AlbumType>(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=US&limit=50`, requestHeadears)
                const albums = albumResponse.data
                if (!albums) {
                    setAlbumList(null)
                }
                setAlbumList(albums)
                setIsLoading(false)
            }, 500)
            
    
            } catch (error) {
                console.log(error)
                setHasError(true)
            }
            finally {
                console.log("chiamate terminate")
                
                
            }
        }
        getAlbums(searchInput) 
    
    }, [searchInput])

    const debouncedOnChange = debounce(handleInputChange, 500);




    return (
        <>
            <div className="relative container flex justify-center p-2">
                <div className="relative w-55">
                <FontAwesomeIcon className="absolute end-3 top-4" icon={faMagnifyingGlass} />
                <input type="text" placeholder="Cerca un artista.."
                    className="input input-bordered join-item w-full max-w-xs"
                    onChange={debouncedOnChange}
                />
                </div>

            </div>

            <section className="container h-screen grid grid-cols-3 gap-2 search-component overflow-y-scroll m-3 p-3">

                {hasError && <h1>contenuto non trovato</h1>}

                {isLoading && <Scheleton />}

                {albumList && albumList.items.map((albumItem, index) => <SearchCard key={index} id={albumItem.id} title={albumItem.name} subtitle={albumItem.release_date} imageUrl={albumItem.images[0].url} />)
                }

            </section>

        </>

    )
}

export default SearchComponent