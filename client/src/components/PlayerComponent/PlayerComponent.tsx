import { useMemo, useState } from 'react';
import { SpotifyPlayer, WebPlaybackState, WebPlaybackTrack } from './playerModel';
import './PlayerComponent.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep, faForwardStep, faPause, faPlay, faVolumeLow } from '@fortawesome/free-solid-svg-icons';
declare global {
    interface Window {
        onSpotifyWebPlaybackSDKReady: () => void;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Spotify: any;
        // non sono riuscito a tipizzare l'oggetto Spotify 
    }
}


const PlayerComponent = () => {
    const [isPaused, setPaused] = useState(false);
    const [isActive, setActive] = useState(false);
    const [currentTrack, setTrack] = useState<WebPlaybackTrack | null>();
    const [spotifyPlayer, setSpotifyPlayer] = useState<SpotifyPlayer | null>(null);



    // memoizzo l'oggetto così da non triggerare chiamate alle future renderizzazioni 
    useMemo(() => {
        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;

        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = () => {
            const player = new window.Spotify.Player({
                name: 'React final test',
                getOAuthToken: (cb: (token: string) => void) => { cb(String(localStorage.getItem("spotifyToken"))); },
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
                        <FontAwesomeIcon icon={faVolumeLow} size='sm'/>
                        <input type="range" min={0} max="100" value={spotifyPlayer.volume} className="range range-xs h-1.5"/></div>
                </div>

            </div>

        </>
    );
}

export default PlayerComponent