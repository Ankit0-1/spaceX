import React, { useEffect } from "react";
import LaunchDetailCard from "./cards/LaunchDetailCard";
import LaunchFacilities from "./LaunchFacilities";
import LiveSatelliteCard from "./cards/LiveSatelliteCard";
import {  useDispatch, useSelector } from "react-redux";
import { featchWeather, fetchActiveSatellite, fetchLaunchPads, fetchRocketsDeatil, fetchUpcomingRockets, previousRocketLaunch } from "../redux/thunk";

function Dashboard() {
  const dispatch = useDispatch();
  const data = useSelector((data) => data.rocketInfo);
  const upcomingLaunch = data.upcomingLaunch;
  const previousLaunch = data.PreviousLaunch;
  const LaunchPads = data.LaunchPads;
  const ActiveRockets = data.ActiveRockets;
  const Rockets = data.Rockets;
  const weather = data.weather;

  useEffect(() => {
    Object.keys(previousLaunch).length === 0 && dispatch(fetchUpcomingRockets());
    Object.keys(upcomingLaunch).length === 0 && dispatch(previousRocketLaunch());
    LaunchPads.length === 0 &&  dispatch(fetchLaunchPads());
    Object.keys(ActiveRockets).length === 0 && dispatch(fetchActiveSatellite());
    Rockets.length === 0 &&  dispatch(fetchRocketsDeatil());

    dispatch(featchWeather());
  }, [])

  return <div className="sc-gsTEea kWnxzG">
  <main  className="sc-gsTEea sc-jHVedQ ioXnHN hLhMVj">
    <div className="sc-gsTEea gtXlbR style-sznC2" id="style-sznC2">
      {<LaunchDetailCard launchType="upcoming" docs={upcomingLaunch.docs}/>}
      {<LaunchDetailCard launchType="previous"docs={previousLaunch.docs}/>}
    </div>
    <div className="sc-gsTEea gtXlbR style-5EVDU" id="style-5EVDU">
      {<LaunchFacilities weather={weather}/>}
      {<LiveSatelliteCard totalSatellite={ActiveRockets}/>}
    </div>
  </main>
</div>;
}

export default Dashboard;
