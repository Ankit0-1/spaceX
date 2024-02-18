import { createSlice } from "@reduxjs/toolkit";
import {fetchUpcomingRockets, previousRocketLaunch, fetchLaunchPads,fetchActiveSatellite,fetchRocketsDeatil, featchWeather} from '../thunk'


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