import { useEffect, useState } from "react";

const TOKEN_REFRESH_INTERVAL = 3600 * 1000;
const useSpotifySDKtoken = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    // Controlla se c'è un token già salvato
    const storedToken = localStorage.getItem("spotifyToken");
    const tokenTimestamp = localStorage.getItem("spotifyTokenTimestamp");
    const now = Date.now();

    if (storedToken && tokenTimestamp) {
      const timeDiff = now - parseInt(tokenTimestamp);
      // Se il token è ancora valido, lo setta e esce dalla funzione
      if (timeDiff < TOKEN_REFRESH_INTERVAL) {
        setToken(storedToken);
        return;
      }
    }

    async function getToken() {
      const response = await fetch("http://localhost:3000/auth/token");
      const json = await response.json();
      setToken(json.spotifyToken);
    }

    getToken();
  }, []);
  localStorage.setItem("spotifyToken", token);
  localStorage.setItem("spotifyTokenTimestamp", Date.now().toString());
};
export default useSpotifySDKtoken;
