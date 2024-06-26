type AlbumType = {
    href: string;
    items: {
      album_group: string;
      album_type: string;
      artists: {
        name: string;
        href: string;
      }[];
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: {
        height: number;
        url: string;
        width: number;
      }[];
      name: string;
      release_date: string;
      release_date_precision: string;
      total_tracks: number;
      type: string;
      uri: string;
    }[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };
  export default AlbumType