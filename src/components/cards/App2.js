import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from '../../redux/slice/ModalSlice';
import Scroller from '../../utils/Scroller';
function App2() {
  const [section, setSection] = useState(0);
  const dispatch = useDispatch();
  const modalData = useSelector((data) => data.ModalData);
  const rocket = useSelector((data) => data.rocketInfo.Rockets);

  const isOpen = modalData.isModalOpen;
  const id = modalData.ModalId
  const handleCloseModal = () => {
    dispatch(toggleModal(false))
  }


  return (
    <div className={ isOpen ? "Modal__wrap-jlobGS kyCjIV snipcss-rgNBZ" : "Modal__wrap-jlobGS kyCjIV snipcss-rgNBZ hide"}>
    <div display="flex" width="100%" fontSize="md" className="sc-gsTEea sc-bYEvvW hLMhFU">
      <div display="flex" className="sc-gsTEea ioXnHN">
        <h4 display="flex" fontSize="lg" className="sc-gsTEea sc-iktFfs gBbwNQ">
          {rocket?.[id]?.name}
          <div display="flex" className="sc-gsTEea eNozYy">
          </div>
        </h4>
        <ul display="flex" className="sc-gsTEea sc-jJEKmz kzWBvq mhjY">
          <li fontSize="lg" className="sc-bdfBQB sc-hiSbEG expsuu fwaETf" onClick={() =>setSection(0)}>
            Overview
          </li>
          <li fontSize="lg" className="sc-bdfBQB sc-hiSbEG expsuu dlPBVY" onClick={() =>setSection(1)}>
            Photos
          </li>
        </ul>
        <button className="sc-gsTEea sc-eCstlR MCqEd dHaRVu sc-kLgnNl haVYVv" display="flex" onClick={handleCloseModal}>
          <svg x="0px" y="0px" width="25px" height="25px" viewBox="0 0 357 357" fill="#353535">
            <g>
              <g id="close">
                <polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
                                 214.2,178.5 		">
                </polygon>
              </g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
          </svg>
        </button>
      </div>
    </div>
    {section  === 0 ?  

   (  <div display="flex" className="sc-gsTEea sc-cBNeex ioXnHN dAvegG">
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

    :(
    <Scroller images={rocket?.[id]?.flickr_images}/>  
  ) }
  </div>  
  )
}

export default App2
