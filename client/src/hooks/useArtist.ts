import axios from "axios";
import ArtistsResult, { ArtistItem } from "../model/artistQuery";
import { useEffect, useState } from "react";

const useArtist = (artistName: string, token: string | null) => {
  const [artist, setArtist] = useState<ArtistItem>();
  const requestUrl = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;


  useEffect(() => {
    const requestHeadears = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}}   
    `,
        },
      };
    axios
      .get<ArtistsResult>(requestUrl, requestHeadears)
      .then((response) => setArtist(response.data.artists.items[0]));
    
  }, [artistName,token,requestUrl]);
  return artist;
};

export default useArtist;
