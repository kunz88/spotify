import { useMemo, useState } from 'react';
import { SpotifyPlayer, WebPlaybackState, WebPlaybackTrack } from './playerModel';
import './PlayerComponent.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep, faForwardStep, faPause, faPlay, faVolumeLow } from '@fortawesome/free-solid-svg-icons';
declare global {
    interface Window {
        onSpotifyWebPlaybackSDKReady: () => void;
        Spotify: any;
    }
}


const PlayerComponent = () => {
    const [isPaused, setPaused] = useState(false);
    const [isActive, setActive] = useState(false);
    const [currentTrack, setTrack] = useState<WebPlaybackTrack | null>();
    const [spotifyPlayer, setSpotifyPlayer] = useState<SpotifyPlayer | null>(null);




    useMemo(() => {
        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;

        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = () => {
            const player = new window.Spotify.Player({
                name: 'React final test',
                getOAuthToken: (cb: (token: string) => void) => { cb("BQCBxKtpSRitG_h5VF_NP8q6Kdx0oLqlKG6sKbFVPCnusc4pvFeDGIeXzZdZ_vBhiDoOi7lQktYFKFY03WdF5UTXY7rvxPSJEpfDzCZJE7D0hpRlecaktndHT0m_3sOPhkVP81WsOl66i-prxhegKlY6bbiZMIuKPoKzWcSNERIQvQQMLXPTKNH47K5dECzy7EeqryCBeF0_XSXtwRZuvcwLM-RW"); },
                volume: 0.5
            });
            setSpotifyPlayer(player);
            player.addListener('ready', ({ device_id }: { device_id: string }) => {
                console.log('Ready with Device ID', device_id);
            });
            player.addListener('not_ready', ({ device_id }: { device_id: string }) => {
                console.log('Device ID has gone offline', device_id);
            });
            player.connect();
            player.addListener('player_state_changed', ((state: WebPlaybackState) => {

                if (!state) {
                    return;
                }

                setTrack(state.track_window.current_track);
                setPaused(state.paused);


                player.getCurrentState().then((state: WebPlaybackState) => {
                    (!state) ? setActive(false) : setActive(true)
                });

            }));

        };
    }, []);


    if(!spotifyPlayer){
        return 
    }

    return (
        <>
            <div className="container player-component flex grid grid-cols-2 gap-2 h-24 sticky bottom-0 right-0">
                <div className="flex">
                    <img src={currentTrack?.album.images[0].url}
                        className="h-20 p-2" alt="" />
                        

                    <div className="p-2">
                        <div className="text-base font-bold text-white">{
                            currentTrack?.name
                        }</div>

                        <div className="font-bold'">{
                            currentTrack?.artists[0].name
                        }</div>
                        {isActive && <div className="badge badge-primary badge-sm"></div>}
                    </div>

                </div>
                <div className="flex self-center gap-4">
                    <button className="join-item btn" onClick={() => { spotifyPlayer.previousTrack() }} >
                        <FontAwesomeIcon icon={faBackwardStep} size='lg' />
                    </button>

                    <button className="btn btn-primary join-item btn-player" onClick={() => { spotifyPlayer.togglePlay() }} >
                        {isPaused ? <FontAwesomeIcon icon={faPlay} size='lg' /> : <FontAwesomeIcon icon={faPause} size='lg' />}
                    </button>

                    <button className="join-item btn" onClick={() => { spotifyPlayer.nextTrack() }} >
                        <FontAwesomeIcon icon={faForwardStep} size='lg' />
                    </button>
                    <div className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faVolumeLow} size='sm' />
                        <progress className="progress progress-success w-40" value="45" max="100"></progress></div>



                </div>

            </div>

        </>
    );
}

export default PlayerComponent