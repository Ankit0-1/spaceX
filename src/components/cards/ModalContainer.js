import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from '../../redux/slice/ModalSlice';
import Crouser from '../../utils/Scroller';
import Overview from '../Overview';
function ModalContainer() {
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
    {section  === 0 ? <Overview rocket={rocket} id={id}/>
    :
    <Crouser images={rocket?.[id]?.flickr_images}/>  
   }
  </div>  
  )
}

export default ModalContainer
