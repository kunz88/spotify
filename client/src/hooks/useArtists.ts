import axios from "axios";
import ArtistsResult, { ArtistItem } from "../model/artistQuery";
import { useEffect, useState } from "react";

const useArtist = (artistNames: string[], token: string) => {
  const [artists, setArtists] = useState<ArtistItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setIsHasError] = useState(false);


  useEffect(() => {
    const requestHeadears = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}}   
    `,
      },
    }
    try {

      setTimeout(() => {
        const artistsResponse = Promise.all(
          artistNames.map(async (artistName) => {
            const response = await axios.get<ArtistsResult>(
              `https://api.spotify.com/v1/search?q=${artistName}&type=artist`,
              requestHeadears
              
            );
            return response.data.artists.items[0];
          })
        );
        artistsResponse.then((results) => setArtists(results));
      }, 2000);
    } catch (error) {
      console.log(error);
      setIsHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { artists, isLoading, hasError };
};



export default useArtist;
