import React from 'react'
import { addModalId, toggleModal } from '../../redux/slice/ModalSlice'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'

function RocketCard({rocketData, index}) {
  const dispatch = useDispatch();
  
  const handleRocketClick =() => {
    dispatch(toggleModal(true));
    dispatch(addModalId(index));
  }

  return (<div
    display="flex"
    className="sc-gsTEea jJTxPw snipcss0-5-5-6 style-22wQn"
    id="style-22wQn"
    onClick={()  => handleRocketClick()}
    key={rocketData?.id}
    >
    <p fontSize="md" className="sc-bdfBQB hYFQlZ snipcss0-6-6-7">
      {rocketData.name}
    </p>
    <div
      display="flex"
      className="sc-gsTEea sc-jeGTLq gTejeV gfpkQM snipcss0-6-6-8"
    >
      <div
        display="flex"
        className="sc-gsTEea dyCIBM snipcss0-7-8-9 "
      >
        <div
          display="flex"
          className="sc-gsTEea sc-eJMPIT gtSlNf cjjVTS snipcss0-8-9-10"
        >
          <div
            display="flex"
            className={`sc-gsTEea sc-fodVek hVcvwo snipcss0-9-10-11 ${rocketData.active ? 'Active' : rocketData.name === "Starship" ? "fPHwmG" : "red" }`}
          >
            <h4
              color="rgba(255,255,255,0.5)"
              fontWeight="normal"
              fontSize="xxs"
              className="sc-bdfBQB sc-bkzYnD kreYWV kwkEfR snipcss0-10-11-12 style-RtP3z"
              id="style-RtP3z"
            >
              status
            </h4>
            <p className="sc-bdfBQB sc-fFucqa bSgtco snipcss0-10-11-13">
              {rocketData.active ? 'Active' : rocketData.name === "Starship" ? "In development" : "Retired" }
            </p>
          </div>
        </div>
      </div>
      <img
        src={rocketData.name === "Falcon 1" ? rocketData.flickr_images[0] : rocketData.flickr_images[1]}
        className="sc-bdfBQB sc-hKgJUU snipcss0-7-8-14 "
      />
    </div>
    </div>
  )
}

export default RocketCard