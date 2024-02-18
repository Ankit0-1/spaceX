import { fecthLaunchPadApi, fetchActiveSatelliteApi, fetchPreviousLaunchApi, fetchRocketsApi, fetchUpcomingRocketsApi, getWeatherData } from "../../utils/RocketsApi";
import { COORDINATES } from "../../const/coordinates";
import { createAsyncThunk } from "@reduxjs/toolkit";

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