import React from 'react'

function LaunchFacility({ image, data, name, label, region }) {
  return (    <div display="flex" className="sc-gsTEea sc-bBXrwG dwGUTk bRiMKL">
  <div className="sc-bdfBQB cqVhKu">
    <div className="sc-bdfBQB sc-iJuVqt fNhnba">
      <div display="flex" className="sc-gsTEea sc-cxFLGX YynDh">
        <div display="flex" className="sc-gsTEea sc-lmoMya ioXnHN">
          <div display="flex" className="sc-gsTEea sc-fodVek cGqifg">
            <h4 color="transparentWhite" fontWeight="normal" fontSize="xxs" className="sc-bdfBQB sc-bkzYnD kreYWV kwkEfR style-sglFL" id="style-sglFL">
              LC-39A &amp; SLC-40
            </h4>
            <p className="sc-bdfBQB sc-fFucqa  bSgtco">
              {name}
            </p>
          </div>
        </div>
        <div display="flex" className="sc-gsTEea sc-lmoMya ioXnHN">
          <div display="flex" className="sc-gsTEea sc-fodVek foOCE">
            <h4 color="transparentWhite" fontWeight="normal" fontSize="xxs" className="sc-bdfBQB sc-bkzYnD kreYWV kwkEfR style-MgAG7" id="style-MgAG7">
              region
            </h4>
            <p className="sc-bdfBQB sc-fFucqa  bSgtco">
              {region}
            </p>
          </div>
        </div>
      </div>
      <div display="flex" className="sc-gsTEea sc-cxFLGX YynDh">
        <div width="30%;" display="flex" className="sc-gsTEea sc-fodVek bCzmGD">
          <h4 color="transparentWhite" fontWeight="normal" fontSize="xxs" className="sc-bdfBQB sc-bkzYnD kreYWV kwkEfR style-zMWSX" id="style-zMWSX">
            temp
          </h4>
          <p className="sc-bdfBQB sc-fFucqa  bSgtco">
            {data?.main?.temp}
          </p>
        </div>
        <div width="30%;" display="flex" className="sc-gsTEea sc-fodVek iNbijr">
          <h4 color="transparentWhite" fontWeight="normal" fontSize="xxs" className="sc-bdfBQB sc-bkzYnD kreYWV kwkEfR style-OKUzo" id="style-OKUzo">
            weather
          </h4>
          <p className="sc-bdfBQB sc-fFucqa  bSgtco">
            {data?.weather?.[0]?.main}
          </p>
        </div>
        <div width="30%;" display="flex" className="sc-gsTEea sc-fodVek chKEFp">
          <h4 color="transparentWhite" fontWeight="normal" fontSize="xxs" className="sc-bdfBQB sc-bkzYnD kreYWV kwkEfR style-HPnSg" id="style-HPnSg">
            wind
          </h4>
          <p className="sc-bdfBQB sc-fFucqa  bSgtco">
            {data?.wind?.speed} m/s
          </p>
        </div>
      </div>
    </div>
  </div>
  <img src={image} className="sc-bdfBQB sc-hKgJUU sc-iwyWTf  kqJPCn" />
</div>
  )
}

export default LaunchFacility