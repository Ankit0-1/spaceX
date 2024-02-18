import React, { useState } from 'react'
import LaunchFacility from './LaunchFacility'
import { pics } from '../../const/pics'
import { MdExpandMore } from "react-icons/md";

function LaunchFacilitiesCard({weather}) {
  const [isClosed, setIsClosed] = useState(true);
  
return (      <article width="[object Object]" display="flex" className="sc-gsTEea sc-kstqJO exkUxL epkVnJ">
  <div width="100%" display="flex" className="sc-gsTEea hjuMS">
    <h3 className="sc-bdfBQB sc-bqyKOL iLfceD">
      Launch facilities
    </h3>
    <LaunchFacility
        name="Cape Canaveral"
        label="LC-39A & SLC-40"
        image={pics.canaveral}
        data={weather.canaveral}
        region="Florida"
        marginTop="0"
      />
    <LaunchFacility  
      name="Starbase Boca Chica"
      label="Starship Launch Facility"
      image={pics.starbase}
      data={weather.starbase}
      region="Texas"
    />
        <div className={`launch-facility-container ${isClosed ? 'launch-facility-closed' : 'launch-facility-open'}`}>
          <LaunchFacility
            name="Vandenerg Base"
            label="USSF SLC-4E"
            image={pics.vandenberg}
            data={weather.vandenberg}
            region="California"
          />
        </div>
    <div display="flex" className="sc-gsTEea sc-idOiZg kmZhta">
      <button display="flex" className="sc-gsTEea sc-dmlqKv iyUgRF hBLSDI" onClick={() => setIsClosed(!isClosed)}>
        <div display="flex" className="sc-gsTEea sc-kfzBvY ioXnHN hFFDGJ">
        {isClosed ?
            <svg version="1.1" width="18px" height="18px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" fill="#fff"><path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M335.083,271.083 L228.416,377.749c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251c-8.341-8.341-8.341-21.824,0-30.165 L289.835,256l-91.584-91.584c-8.341-8.341-8.341-21.824,0-30.165s21.824-8.341,30.165,0l106.667,106.667 C343.424,249.259,343.424,262.741,335.083,271.083z"></path></svg>
          :
          <svg version="1.1" width="18px" height="18px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" fill="#fff">
            <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M335.083,271.083 L228.416,377.749c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251c-8.341-8.341-8.341-21.824,0-30.165 L289.835,256l-91.584-91.584c-8.341-8.341-8.341-21.824,0-30.165s21.824-8.341,30.165,0l106.667,106.667 C343.424,249.259,343.424,262.741,335.083,271.083z">
            </path></svg>
          }
        </div>
        <p className="sc-bdfBQB sc-hHfuMS dsoCpj">
          {isClosed ? 'more' : 'less'}
        </p>
      </button>
    </div>
  </div>
</article>
  )
}

export default LaunchFacilitiesCard