import React, { useEffect, useState } from 'react'

function LaunchDetailCard({launchType, docs}) {
  const [data, setData] = useState({});

  useEffect(() =>{
    setData(docs?.[0]);
  }, [docs]);

  const name = data?.name;
  const date = data?.date_local;
  const flight_number = data?.flight_number;
  const links = data?.links;
  const launchpad = data?.launchpad;
  const launchPadName = launchpad?.name;
  const rocketName = data?.rocket?.name;


  return (<>
         <article width="[object Object]" display="flex" className="sc-gsTEea sc-kstqJO exkUxL epkVnJ">
        <div width="100%" display="flex" className="sc-gsTEea hjuMS">
          <h3 className="sc-bdfBQB sc-bqyKOL iLfceD">
           { launchType === 'upcoming' ?  "Upcoming launch" : "Previous Launch"}
          </h3>
          <div width="100%" display="flex" className="sc-gsTEea jnMkCi">
            <div display="flex" width="50%" className="sc-gsTEea sc-hBEYId hdEHzC">
              <div display="flex" className="sc-gsTEea sc-fodVek dSIRyy">
                <h4 color="transparentWhite" fontWeight="normal" fontSize="xxs" className="sc-bdfBQB sc-bkzYnD kreYWV kwkEfR style-JLoKC" id="style-JLoKC">
                  mission name
                </h4>
                <p className="sc-bdfBQB sc-fFucqa  jpdMpM">
                 {name}
                </p>
              </div>
              <div display="flex" className="sc-gsTEea sc-fodVek dSIRyy">
                <h4 color="transparentWhite" fontWeight="normal" fontSize="xxs" className="sc-bdfBQB sc-bkzYnD kreYWV kwkEfR style-NdqQR" id="style-NdqQR">
                  rocket
                </h4>
                <p className="sc-bdfBQB sc-fFucqa  bSgtco">
                  {rocketName}
                </p>
              </div>
              <div display="flex" className="sc-gsTEea sc-fodVek dSIRyy">
                <h4 color="transparentWhite" fontWeight="normal" fontSize="xxs" className="sc-bdfBQB sc-bkzYnD kreYWV kwkEfR style-pBj4L" id="style-pBj4L">
                  flight number
                </h4>
                <p className="sc-bdfBQB sc-fFucqa  bSgtco">
                  {flight_number}
                </p>
              </div>
              <div display="flex" className="sc-gsTEea sc-fodVek dSIRyy">
                <h4 color="transparentWhite" fontWeight="normal" fontSize="xxs" className="sc-bdfBQB sc-bkzYnD kreYWV kwkEfR style-hrWac" id="style-hrWac">
                  TIME (UTC)
                </h4>
                <p className="sc-bdfBQB sc-fFucqa  jpdMpM">
                  {date}
                </p>
              </div>
              <div display="flex" className="sc-gsTEea sc-fodVek dSIRyy">
                <h4 color="transparentWhite" fontWeight="normal" fontSize="xxs" className="sc-bdfBQB sc-bkzYnD kreYWV kwkEfR style-XciGX" id="style-XciGX">
                  links
                </h4>
                <ul display="flex" className="sc-gsTEea kyyQfl">
                  <ul display="flex" className="sc-gsTEea qFfjh">
                    <div target="_blank" data-tip="Wikipedia Unavailable" display="flex" className="sc-gsTEea vubGq style-T9BOx" currentitem="false" id="style-T9BOx">
                      <svg height="25" width="25" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 97.75 97.75" fill="#4a4a4a">
                        <path d="M48.875,0C21.883,0,0,21.883,0,48.875S21.883,97.75,48.875,97.75S97.75,75.867,97.75,48.875S75.867,0,48.875,0z M77.691,37.503c-2.779,6.28-11.279,26.171-16.951,39.136c-0.008,0.006-1.486-0.003-1.49-0.005l-8.945-21.069 c-3.545,6.953-7.473,14.181-10.832,21.059c-0.02,0.035-1.625,0.016-1.627-0.006c-5.135-11.986-10.459-23.893-15.621-35.87 c-1.195-2.928-5.387-7.637-8.256-7.61c0-0.34-0.016-1.099-0.02-1.558l17.682-0.002l-0.014,1.531 c-2.076,0.096-5.664,1.421-4.734,3.713c2.492,5.381,11.316,26.227,13.701,31.519c1.664-3.257,6.311-11.939,8.225-15.609 c-1.5-3.078-6.457-14.57-7.943-17.464c-1.121-1.887-3.934-2.118-6.1-2.151c0-0.483,0.025-0.855,0.016-1.518l15.543,0.048v1.412 c-2.104,0.058-4.096,0.841-3.193,2.853c2.091,4.34,3.312,7.43,5.231,11.444c0.613-1.176,3.755-7.622,5.253-11.024 c0.905-2.262-0.447-3.109-4.232-3.211c0.05-0.372,0.017-1.119,0.05-1.475l13.424,0.013l0.006,1.401 c-2.467,0.096-5.021,1.41-6.354,3.45l-6.464,13.406c0.709,1.773,6.924,15.58,7.578,17.111L74.988,36.18 c-0.951-2.497-3.984-3.055-5.17-3.082c0.008-0.398,0.01-1.005,0.012-1.512l13.951,0.04l0.02,0.07l-0.023,1.394 C80.717,33.183,78.824,34.82,77.691,37.503z">
                        </path>
                      </svg>
                    </div>
                    <div className="__react_component_tooltip tfeb8e255-65d7-4af9-ae40-aa45e8e28cd1 place-bottom type-dark" id="tfeb8e255-65d7-4af9-ae40-aa45e8e28cd1" data-id="tooltip">
                    </div>
                  </ul>
                  <ul display="flex" className="sc-gsTEea qFfjh">
                    <a href="https://youtu.be/pY628jRd6gM" target="_blank" data-tip="Youtube" display="flex" className="sc-gsTEea vubGq style-h9Lvs" currentitem="false" previewlistener="true" id="style-h9Lvs">
                      <svg height="25" width="25" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#fff">
                        <path d="m224.113281 303.960938 83.273438-47.960938-83.273438-47.960938zm0 0">
                        </path>
                        <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm159.960938 256.261719s0 51.917969-6.585938 76.953125c-3.691406 13.703125-14.496094 24.507812-28.199219 28.195312-25.035156 6.589844-125.175781 6.589844-125.175781 6.589844s-99.878906 0-125.175781-6.851562c-13.703125-3.6875-24.507813-14.496094-28.199219-28.199219-6.589844-24.769531-6.589844-76.949219-6.589844-76.949219s0-51.914062 6.589844-76.949219c3.6875-13.703125 14.757812-24.773437 28.199219-28.460937 25.035156-6.589844 125.175781-6.589844 125.175781-6.589844s100.140625 0 125.175781 6.851562c13.703125 3.6875 24.507813 14.496094 28.199219 28.199219 6.851562 25.035157 6.585938 77.210938 6.585938 77.210938zm0 0">
                        </path>
                      </svg>
                    </a>
                    <div className="__react_component_tooltip t35baf934-ea14-4c8e-a210-5a3e4afe4b30 place-bottom type-dark" id="t35baf934-ea14-4c8e-a210-5a3e4afe4b30" data-id="tooltip">
                    </div>
                  </ul>
                  <ul display="flex" className="sc-gsTEea qFfjh">
                    <div target="_blank" data-tip="Reddit Unavailable" display="flex" className="sc-gsTEea vubGq style-nNIoe" currentitem="false" id="style-nNIoe">
                      <svg height="25" width="25" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#4a4a4a">
                        <path d="m309.605469 343.347656c-11.46875 11.46875-36.042969 15.5625-53.554688 15.5625-17.5625 0-42.085937-4.09375-53.554687-15.5625-2.714844-2.714844-7.066406-2.714844-9.777344 0-2.714844 2.714844-2.714844 7.066406 0 9.777344 18.175781 18.175781 53.09375 19.609375 63.332031 19.609375s45.105469-1.433594 63.335938-19.609375c2.660156-2.714844 2.660156-7.066406 0-9.777344-2.714844-2.714844-7.066407-2.714844-9.78125 0zm0 0">
                        </path>
                        <path d="m224 282.675781c0-14.695312-11.980469-26.675781-26.675781-26.675781-14.691407 0-26.675781 11.980469-26.675781 26.675781 0 14.691407 11.984374 26.675781 26.675781 26.675781 14.695312 0 26.675781-11.980468 26.675781-26.675781zm0 0">
                        </path>
                        <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm148.53125 290.148438c.5625 3.6875.871094 7.425781.871094 11.214843 0 57.445313-66.867188 103.988281-149.351563 103.988281s-149.351562-46.542968-149.351562-103.988281c0-3.839843.308593-7.628906.871093-11.316406-13.003906-5.835937-22.066406-18.890625-22.066406-34.046875 0-20.582031 16.691406-37.324219 37.324219-37.324219 10.035156 0 19.097656 3.941407 25.804687 10.394531 25.90625-18.6875 61.75-30.621093 101.632813-31.644531 0-.511719 18.636719-89.292969 18.636719-89.292969.359375-1.738281 1.382812-3.226562 2.867187-4.195312 1.484375-.972656 3.277344-1.28125 5.019531-.921875l62.054688 13.207031c4.351562-8.804687 13.308594-14.898437 23.804688-14.898437 14.746093 0 26.675781 11.929687 26.675781 26.675781s-11.929688 26.675781-26.675781 26.675781c-14.285157 0-25.855469-11.265625-26.519532-25.394531l-55.554687-11.828125-16.996094 80.027344c39.167969 1.378906 74.34375 13.257812 99.839844 31.691406 6.707031-6.5 15.820312-10.496094 25.90625-10.496094 20.636719 0 37.324219 16.691407 37.324219 37.324219 0 15.257812-9.164063 28.3125-22.117188 34.148438zm0 0">
                        </path>
                        <path d="m314.675781 256c-14.695312 0-26.675781 11.980469-26.675781 26.675781 0 14.691407 11.980469 26.675781 26.675781 26.675781 14.691407 0 26.675781-11.984374 26.675781-26.675781 0-14.695312-11.980468-26.675781-26.675781-26.675781zm0 0">
                        </path>
                      </svg>
                    </div>
                    <div className="__react_component_tooltip te4b7d413-0f1e-48f3-b5db-8b66c73c7d72 place-bottom type-dark" id="te4b7d413-0f1e-48f3-b5db-8b66c73c7d72" data-id="tooltip">
                    </div>
                  </ul>
                </ul>
              </div>
            </div>
            <div display="flex" width="50%" className="sc-gsTEea sc-hBEYId hdEHzC">
              <div display="flex" className="sc-gsTEea sc-fodVek dSIRyy">
                <h4 color="transparentWhite" fontWeight="normal" fontSize="xxs" className="sc-bdfBQB sc-bkzYnD kreYWV kwkEfR style-oBrsP" id="style-oBrsP">
                  { launchType === 'upcoming' ?  "rocket logo" : "MISSION PATCH"}
                </h4>
                <div width="[object Object]" height="[object Object]" display="flex" className="sc-gsTEea crnfrR">
                  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="50.61" viewBox="0 0 64.917 45.619">
                    <path d="M54.296 29.82a3.876 3.876 0 01-.072-.397c-.121-.869-.829-1.74-1.804-2.218-1.029-.506-2.29-.743-5.435-1.02-.685-.06-1.267-.13-1.293-.157-.084-.084.385-.509.899-.814.272-.163.495-.319.496-.347 0-.03-.22-.068-.49-.086-.342-.023-.83-.16-1.595-.448-.606-.229-1.31-.458-1.562-.51l-.46-.094.283-.216c.155-.119.283-.246.283-.283 0-.096-.914-.24-1.502-.237-.278.002-.771.05-1.096.109-.325.057-.601.095-.614.084-.054-.046 1.192-.52 1.69-.642.314-.077.865-.132 1.325-.134.85-.002 1.21.079 2.432.55.386.148.722.248.748.222.094-.093-.368-.788-.686-1.032-.528-.406-.945-.46-3.557-.456-4.446.006-9.036.631-11.848 1.614-.58.203-.778.238-1.095.197-1.488-.197-4.732-1.83-8.824-4.446-2.1-1.343-7.643-5.158-8.03-5.527-.043-.042.382.142.945.408 6.543 3.093 13.984 5.207 21.728 6.172 2.813.351 5.311.532 9.191.667 1.588.055 1.985.092 2.145.196.272.179.95 1.016 1.736 2.142l.665.953.5.052c1.655.17 3.575 1.056 4.602 2.125.667.696.915 1.24.916 2.018 0 .5-.038.671-.25 1.121-.252.537-.316.612-.371.433zm-32.72-3.762c-2.16-1.29-5.375-3.944-8.144-6.725C8.711 14.591 5.006 9.326 2.89 4.35 2.4 3.197 1.962 2.04 2.003 2c.014-.014.148.263.297.616C2.88 4 4.292 6.33 5.603 8.072c1.52 2.021 3.793 4.474 5.863 6.328 3.97 3.555 8.71 6.754 13.858 9.352.842.425 1.53.79 1.53.813 0 .049-4.414 1.89-4.53 1.89-.046 0-.382-.18-.747-.397z" fill="#eb1747">
                    </path>
                    <path d="M22.527 37.24v-6.378l6.671.003 6.672.003-.453.428c-.725.684-.608.669-5.347.669h-4.08v3.306h3.543c2.302 0 3.543.028 3.543.079 0 .156-.57.703-.896.861-.32.155-.468.162-3.262.162H25.99v4.38l-.298.494c-.73 1.207-1.79 2.04-2.949 2.32l-.216.052zM49.612 43.339c-.868-.379-1.659-1.022-2.263-1.843l-.601-.817v-9.76h3.399v6.323c0 3.477-.015 6.317-.034 6.311a23.912 23.912 0 01-.5-.214zm-12.518-6.981v-5.575h3.263v4.487h2.38c1.309 0 2.38.046 2.38.102 0 .056-.23.286-.51.51-.504.403-.536.409-2.38.452l-1.87.045v5.554h-3.263z" fill="#f5f5f5">
                    </path>
                  </svg>
                </div>
              </div>
              { launchType === 'upcoming' ?  (<>
                 <h4 color="transparentWhite" fontWeight="normal" fontSize="xxs" className="sc-bdfBQB sc-bkzYnD kreYWV kwkEfR style-bEtXc" id="style-bEtXc">
                 launchpad
               </h4>
               <p className="sc-bdfBQB sc-fFucqa  bSgtco">
                  {launchPadName}
               </p>
               </>
            ) : 
            
            (
                <div display="flex" className="sc-gsTEea sc-fodVek dSIRyy">
                  <div display="flex" className="sc-gsTEea sc-fodVek dSIRyy">
                  <h4 color="transparentWhite" fontWeight="normal" fontSize="xxs" className="sc-bdfBQB sc-bkzYnD kreYWV kwkEfR style-eVNNO" id="style-eVNNO">
                    crew
                  </h4>
                  <p className="sc-bdfBQB sc-fFucqa  bSgtco">
                    <svg version="1.1" width="25" height="30" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 60.671 60.671">
                      <ellipse cx="30.336" cy="12.097" rx="11.997" ry="12.097" style={{fill: 'rgb(255, 255, 255)'}}>
                      </ellipse>
                      <path d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9 C48.354,35.818,42.661,30.079,35.64,30.079z" style={{fill: 'rgb(255, 255, 255)'}}>
                      </path>
                    </svg>
                    <svg version="1.1" width="25" height="30" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 60.671 60.671">
                      <ellipse cx="30.336" cy="12.097" rx="11.997" ry="12.097" style={{fill: 'rgb(255, 255, 255)'}}>
                      </ellipse>
                      <path d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9 C48.354,35.818,42.661,30.079,35.64,30.079z" style={{fill: "rgb(255, 255, 255)"}}>
                      </path>
                    </svg>
                    <svg version="1.1" width="25" height="30" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 60.671 60.671">
                      <ellipse cx="30.336" cy="12.097" rx="11.997" ry="12.097" style={{fill: 'rgb(255, 255, 255)'}}>
                      </ellipse>
                      <path d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9 C48.354,35.818,42.661,30.079,35.64,30.079z" style={{fill: "rgb(255, 255, 255)"}}>
                      </path>
                    </svg>
                    <svg version="1.1" width="25" height="30" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 60.671 60.671">
                      <ellipse cx="30.336" cy="12.097" rx="11.997" ry="12.097" style={{fill: 'rgb(255, 255, 255)'}}>
                      </ellipse>
                      <path d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9 C48.354,35.818,42.661,30.079,35.64,30.079z" style={{ fill: 'rgb(255, 255, 255)' }} />
                    </svg>
                  </p>
                </div>
                </div>
            )}
              {/* <div display="flex" className="sc-gsTEea sc-fodVek dSIRyy">
                <h4 color="transparentWhite" fontWeight="normal" fontSize="xxs" className="sc-bdfBQB sc-bkzYnD kreYWV kwkEfR style-bEtXc" id="style-bEtXc">
                  launchpad
                </h4>
                <p className="sc-bdfBQB sc-fFucqa  bSgtco">
                  KSC LC 39A
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </article>
  </>
  )
}

export default LaunchDetailCard