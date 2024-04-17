import { BaseSyntheticEvent, useEffect, useState } from "react"

import ArtistsResult from "../../model/artistQuery"
import axios from "axios"
import AlbumType from "./model/albumType"
import SearchCard from "./SearchCard/SearchCard"
import "./SearchComponent.scss"
import { debounce } from 'lodash'
import Scheleton from "../commons/LoadingComponent/Scheleton"





const SearchComponent = () => {
    const [searchInput, setSearchInput] = useState<string>("")
    const [albumList, setAlbumList] = useState<AlbumType | null>(null)
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const [hasError,setHasError] = useState<boolean>(false)

    
    
    const handleInputChange = (event:BaseSyntheticEvent) => { // tipo ufficiale dell'evento onChange dell'input type
        if(event.target.value.length > 4){
            setSearchInput(event.target.value)
        }  
    }



    const token = localStorage.getItem("spotifyToken")
    // provare a rendere asincrona la funzione, in modo da ottimizzare le chiamate 


    const getAlbums = async(artistName:string) => {
        setAlbumList(null)
        if(!artistName){
            return 
        }
        setIsLoading(true)
        const requestUrl = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;
        const requestHeadears = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}}`,
            },
        };

        try{
            const response = await axios.get<ArtistsResult>(requestUrl, requestHeadears)
            const artistId = response.data.artists.items[0].id
    
            const albumResponse = await axios.get<AlbumType>(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=US&limit=50`, requestHeadears)
            const albums = albumResponse.data
            if(!albums){
                return setAlbumList(null)
            }    
            return setAlbumList(albums)


        }catch(error){
            console.log(error)
            setHasError(true)
        }
        finally{
            console.log("chiamate terminate")
            setIsLoading(false)
        }
    
    
    }


    useEffect(() => {getAlbums(searchInput)}, [searchInput])

    const debouncedOnChange = debounce(handleInputChange, 500);




    return (
        <>
            <div className="container flex justify-center p-2">
                <input type="text" placeholder="Cerca un artista.."
                    className="input input-bordered join-item w-full max-w-xs"
                    onChange={debouncedOnChange}


                />
            </div>

            <section className="container h-screen grid grid-cols-3 gap-2 search-component overflow-y-scroll m-3 p-3">
            
            {hasError && <h1>contenuto non trovato</h1>}
            
           {isLoading && <Scheleton/>} 
            
            
            
            {albumList && albumList.items.map((albumItem, index) => <SearchCard key={index} title={albumItem.name} subtitle={albumItem.release_date} imageUrl={albumItem.images[0].url} />) 
        }




            </section>

        </>

    )
}

export default SearchComponent