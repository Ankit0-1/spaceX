import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fecthLaunchPadApi, fetchActiveSatelliteApi, fetchPreviousLaunchApi, fetchRocketsApi, fetchUpcomingRocketsApi, getWeatherData } from "../../utils/RocketsApi";
import { act } from "react-dom/test-utils";
import { COORDINATES } from "../../const/coordinates";


export const fetchUpcomingRockets = createAsyncThunk('rocketInfo/fetchUpcomingRockets', 
    async () => {
            const response = await fetchUpcomingRocketsApi()
            return response;
    }
)

export const previousRocketLaunch = createAsyncThunk('rocketInfo/previousRocketLaunch', 
    async () => {
        return await fetchPreviousLaunchApi()
    }
)

export const fetchLaunchPads = createAsyncThunk('rocketInfo/fetchLaunchPad' , 
    async () =>{
        return await fecthLaunchPadApi();
    }
)

export const fetchActiveSatellite = createAsyncThunk('rocketInfo/fetchActiveSatellite' , 
async () =>{
    const data  = await fetchActiveSatelliteApi();
    return data;
}
)
export const fetchRocketsDeatil = createAsyncThunk('rocketInfo/fetchRocketsDeatil', 
    async () => {
        return await fetchRocketsApi();
    }
)

export const featchWeather = createAsyncThunk('rocketInfo/fetchWeather', 
    async () => {
      const [canaveralResponse, starbaseResponse, vandenbergResponse] =
      await Promise.all([
        getWeatherData(COORDINATES.CANAVERAL),
        getWeatherData(COORDINATES.STARBASE),
        getWeatherData(COORDINATES.VANDENBERG),
      ]);

      return {
        weather: {
          canaveral: canaveralResponse,
          starbase: starbaseResponse,
          vandenberg: vandenbergResponse,
        },
      };
    }
)
const RocketInfoSlice = createSlice({
    name: "rocketInfo", 
    initialState: {
        loading: true,
        upcomingLaunch: {},
        PreviousLaunch: {},
        LaunchPads: [],
        ActiveRockets: {},
        Rockets: [],
        weather: {},
        
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchUpcomingRockets.pending, (state, action) => {
            state.loading = true;
          })
          .addCase(fetchUpcomingRockets.fulfilled, (state, action) => {
            state.loading = false;
            // Update state with fetched data
            state.upcomingLaunch = action.payload;
          })

          .addCase(previousRocketLaunch.pending, (state, action) => {
            state.loading = true;
          })
          .addCase(previousRocketLaunch.fulfilled, (state, action)  => {
            state.loading = false;
            state.PreviousLaunch = action.payload
          })
          
          .addCase(fetchLaunchPads.pending, (state,action) => {
            state.loading = true;
           })
           .addCase(fetchLaunchPads.fulfilled, (state,action) => {
            state.loading = false;
            state.LaunchPads = action.payload
           })

           .addCase(fetchActiveSatellite.pending, (state,action) => {
            state.loading = true;
           })
           .addCase(fetchActiveSatellite.fulfilled, (state,action) => {
            state.loading = false;
            state.ActiveRockets = action.payload
           })

           .addCase( fetchRocketsDeatil.pending, (state,action) => {
            state.loading = true;
           })
           .addCase( fetchRocketsDeatil.fulfilled, (state,action) => {
            state.loading = false;
            state.Rockets = action.payload
           })

           .addCase( featchWeather.pending, (state,action) => {
            state.loading = true;
           })
           .addCase( featchWeather.fulfilled, (state,action) => {
            state.loading = false;
            state.weather = action.payload.weather
           })
      }
})


export default RocketInfoSlice.reducer;