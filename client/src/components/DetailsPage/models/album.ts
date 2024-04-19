export type Album = {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    copyrights: Copyright[];
    external_ids: ExternalIds;
    external_urls: {
        spotify: string;
    };
    genres: string[];
    href: string;
    id: string;
    images: Image[];
    label: string;
    name: string;
    popularity: number;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    tracks: {
        href: string;
        items: Track[];
        limit: number;
        next: string | null;
        offset: number;
        previous: string | null;
        total: number;
    };
    type: string;
    uri: string;
};

type Artist = {
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
};

type Copyright = {
    text: string;
    type: string;
};

type ExternalIds = {
    upc: string;
};

type Image = {
    height: number;
    url: string;
    width: number;
};

type Track = {
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    // Altri campi relativi alla traccia dell'album
};