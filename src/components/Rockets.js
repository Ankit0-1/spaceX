// import React from "react";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocketsDeatil } from '../redux/thunk';
import RocketCard from './cards/RocketCard';

function Rockets() {
  const Rockets = useSelector((store) => store.rocketInfo.Rockets)
  const dispatch = useDispatch();
  useEffect(() => {
    Rockets.length === 0 &&  dispatch(fetchRocketsDeatil());
  }, [])

  return (
    <>
    <div
      width="100%"
      height="[object Object]"
      display="flex"
      className="sc-gsTEea kWnxzG snipcss0-2-2-14"
    >
      <main
        display="flex"
        className="sc-gsTEea sc-jHVedQ ioXnHN jzXrOh snipcss0-0-0-1"
      >
        <div
          display="flex"
          className="sc-gsTEea hDktpQ snipcss0-1-1-2 style-GbOKW"
          id="style-GbOKW"
        >
          <article
            width="[object Object]"
            display="flex"
            className="sc-gsTEea sc-nFqVA ivdKP OTvzD snipcss0-2-2-3"
          >
            <div
              width="100%"
              display="flex"
              className="sc-gsTEea hjuMS snipcss0-3-3-4"
            >
              <div
                width="100%"
                display="flex"
                className="sc-gsTEea gIrGo snipcss0-4-4-5"
              >
                {
                  Rockets.map((rocket, index) => <RocketCard rocketData={rocket} index={index} key={rocket.id}/>)
                }
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>

  </>);
}

export default Rockets;

