import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


import ArtistsResult from '../model/artistQuery'

// Define a service using a base URL and expected endpoints
export const artistSpotifyApi = createApi({
  reducerPath: 'artistApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spotify.com/v1/search?q=',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("spotifyToken")
    
    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    headers.set("Content-Type", "application/json")

    return headers
  },
   }),
  endpoints: (builder) => ({
    getArtistByName: builder.query<ArtistsResult, string>({
      query: (name) => `${name}&type=artist`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetArtistByNameQuery } = artistSpotifyApi