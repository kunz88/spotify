import axios from "axios";
import { useEffect, useState } from "react";


const CLIENT_ID = import.meta.env.VITE_CLIENT_ID.trim()

const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET.trim()





const TOKEN_REFRESH_INTERVAL = 3600 * 1000;

type TokenType = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

const useSpotifyToken = () => {
  const [accessToken, setAccessToken] = useState<string>("");

  useEffect(() => {
    // Controlla se c'è un token già salvato
    const storedToken = localStorage.getItem("spotifyToken");
    const tokenTimestamp = localStorage.getItem("spotifyTokenTimestamp");
    const now = Date.now();

    if (storedToken && tokenTimestamp) {
      const timeDiff = now - parseInt(tokenTimestamp);
      // Se il token è ancora valido, lo setta e esce dalla funzione
      if (timeDiff < TOKEN_REFRESH_INTERVAL) {
        setAccessToken(storedToken);
        return;
      }
    }
    
    
    // se non ho il token effettuo la chiamata all'endpoint
    const requestUrl = "https://accounts.spotify.com/api/token";
    const requestBody = `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    const requestOptions = {
      headers: { "Content-type": "application/x-www-form-urlencoded" },
    };
    axios // effettuo una chiamata post per settare il token di spotify
      .post<TokenType>(requestUrl, requestBody, requestOptions)
      .then((response) => {
        setAccessToken(response.data.access_token);
      })
      .catch((e) => console.log('Errore durante la richiesta del token di accesso a Spotify:', e));
  }, []);

  localStorage.setItem("spotifyToken", accessToken);
  localStorage.setItem('spotifyTokenTimestamp', Date.now().toString());
};

export default useSpotifyToken;
