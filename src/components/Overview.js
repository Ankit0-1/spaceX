import React from 'react'

function Overview({rocket, id}) {
    
  return (<div display="flex" className="sc-gsTEea sc-cBNeex ioXnHN dAvegG">
  <div width="100%" height="100%" display="flex" className="sc-gsTEea ZbhzQ style-3hZt9" id="style-3hZt9">
    <div display="flex" className="sc-gsTEea sc-laRQdt gTejeV dlqIkP">
      <div display="flex" className="sc-gsTEea dyCIBM">
        <div display="flex" className="sc-gsTEea sc-iNqMzA gtSlNf sawMx">
        </div>
      </div>
      <img src="https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg" className="sc-bdfBQB sc-hKgJUU" />
    </div>
    <div width="[object Object]" display="flex" className="sc-gsTEea pWRvr">
      <div height="[object Object]" display="flex" className="sc-gsTEea sc-lcuiOb YVfIw fRnTGH">
        <div display="flex" className="sc-gsTEea hoMfZr">
          <div display="flex" className="sc-gsTEea sc-fodVek dSIRyy">
            <h4 color="#9b9b9b" fontWeight="normal" fontSize="xxs" className="sc-bdfBQB sc-bkzYnD gruamf kwkEfR style-2YRMD" id="style-2YRMD">
              description
            </h4>
            <p fontSize="xs" fontWeight="light" className="sc-bdfBQB jCqpWn">
            {rocket?.[id]?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 
)
}

export default Overview