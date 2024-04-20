import { useEffect, useState } from "react";


const useSpotifySDKtoken = () =>{
    const [token, setToken] = useState('');

    useEffect(() => {
    
      async function getToken() {
        const response = await fetch('http://localhost:3000/auth/token');
        const json = await response.json();
        setToken(json.spotifyToken);
      }
    
      getToken();
    
    }, []);
    localStorage.setItem("spotifyToken", token);
    localStorage.setItem('spotifyTokenTimestamp', Date.now().toString());
    

}
export default useSpotifySDKtoken


