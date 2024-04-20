export type WebPlaybackTrack = {
    uri: string;          // URI di Spotify
    id: string | null;    // ID di Spotify dall'URI (può essere null)
    type: "track" | "episode" | "ad";  // Tipo di contenuto: può essere "track", "episode" o "ad"
    media_type: "audio" | "video";      // Tipo di file: può essere "audio" o "video"
    name: string;         // Nome del contenuto
    is_playable: boolean; // Flag che indica se può essere riprodotto
    album: {
      uri: string;        // URI dell'album di Spotify
      name: string;       // Nome dell'album
      images: { url: string }[]; // Immagini dell'album
    };
    artists: {
      uri: string;        // URI dell'artista di Spotify
      name: string;       // Nome dell'artista
    }[];
  }


  export type WebPlaybackState = {
    context: {
      uri: string | null; // L'URI del contesto (può essere null)
      metadata: Record<string,null> | null; // Metadati aggiuntivi per il contesto (può essere null)
    };
    disallows: {
      pausing: boolean;
      peeking_next: boolean;
      peeking_prev: boolean;
      resuming: boolean;
      seeking: boolean;
      skipping_next: boolean;
      skipping_prev: boolean;
    };
    paused: boolean;  // Se la traccia corrente è in pausa.
    position: number; // La posizione in millisecondi della traccia corrente.
    repeat_mode: 0 | 1 | 2; // La modalità di ripetizione. Nessuna modalità di ripetizione è 0,
                             // ripeti il contesto è 1 e ripeti la traccia è 2.
    shuffle: boolean; // True se è in modalità casuale, false altrimenti.
    track_window: {
      current_track: WebPlaybackTrack;           // La traccia attualmente in riproduzione locale.
      previous_tracks: WebPlaybackTrack[];       // Tracce riprodotte in precedenza. Il numero può variare.
      next_tracks: WebPlaybackTrack[];           // Tracce in coda per la riproduzione successiva. Il numero può variare.
    };
  }

 export type SpotifyPlayer = {
    name: string;
    getOAuthToken: (cb: (token: string) => void) => void;
    volume: number;
    getCurrentState: () => WebPlaybackState;
    connect: () => void;
    previousTrack: () => void;
    togglePlay: () => void;
    nextTrack: () => void;
  }