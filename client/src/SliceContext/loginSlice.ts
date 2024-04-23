import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "isLogged",
  initialState: {
    value: false,
  },
  reducers: {
    toggleIsLogged: (state) => {
      localStorage.removeItem("userToken")
      localStorage.removeItem("spotifyToken")
      localStorage.removeItem("spotifyTokenTimestamp")
      state.value = false;
      alert("sloggato spotify")
      location.reload()
    },
    setIsLogged: (state) => {
      // TODO utilizzare libreria jwt per validazione utente
      if (localStorage.getItem("userToken")) state.value = true;
    },
  },
});

export const { toggleIsLogged, setIsLogged } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
