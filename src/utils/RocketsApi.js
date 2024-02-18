


export const fetchUpcomingRocketsApi = async()  => {
    try  {
        // const response = await fetch('https://api.spacexdata.com/v3/launches/upcoming');
        const response = await fetch('https://api.spacexdata.com/v5/launches/query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Set the content type to JSON
              },
        body: JSON.stringify({
            query: {
                upcoming: true
            },
            options: {
                limit: 1,
                sort: {
                  flight_number: 'asc',
                },
                populate: [
                  {
                    path: "cores",
                  },
                  {
                    path: "launchpad",
                  },
                  {
                    path: "rocket",
                    select: {
                      name: 1,
                    },
                  },
                  {
                    path: "fairings",
                  },
                  {
                    path: "capsules",
                  },
                  {
                    path: "payloads",
                  },
                  {
                    path: "crew",
                    populate: [
                      {
                        path: "crew",
                      },
                    ],
                  },
                  {
                    path: "cores",
                    populate: [
                      {
                        path: "core",
                      },
                      {
                        path: "landpad",
                      },
                    ],
                  },
                ],
              },
          })
        });
        const data = await response.json();
        return data;
    }catch(err){{
        alert('something went wrong in this');
    }}
}

export const fetchPreviousLaunchApi = async() => {
    try {
        // const response = await fetch('https://api.spacexdata.com/v3/launches/past?limit=3');
             // const response = await fetch('https://api.spacexdata.com/v3/launches/upcoming');
             const response = await fetch('https://api.spacexdata.com/v5/launches/query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Set the content type to JSON
                  },
            body: JSON.stringify({
                query: {
                    upcoming: false
                },
                options: {
                    limit: 1,
                    sort: {
                      flight_number: 'desc',
                    },
                    populate: [
                      {
                        path: "cores",
                      },
                      {
                        path: "launchpad",
                      },
                      {
                        path: "rocket",
                        select: {
                          name: 1,
                        },
                      },
                      {
                        path: "fairings",
                      },
                      {
                        path: "capsules",
                      },
                      {
                        path: "payloads",
                      },
                      {
                        path: "crew",
                        populate: [
                          {
                            path: "crew",
                          },
                        ],
                      },
                      {
                        path: "cores",
                        populate: [
                          {
                            path: "core",
                          },
                          {
                            path: "landpad",
                          },
                        ],
                      },
                    ],
                  },
              })
            });
            const data = await response.json();
            return data;
    }catch(err){
        alert('something went wrong');
    }
}
export const fecthLaunchPadApi = async() => {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/launchpads');
        const data = response.json();
        return data;
    }catch(err){
    alert('something went wrong');
    }
}

export const fetchActiveSatelliteApi = async() => {
    try{
        const response = await fetch('https://api.spacexdata.com/v4/starlink/query',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Set the content type to JSON
              },
            body :JSON.stringify({
                query: {
                    "spaceTrack.DECAYED": 0,
                  },
                  options: {
                    limit: 1000000,
                    select: {
                      id: 1,
                    },
                  },
            })
            }
        )
        const data = await response.json();
        return data;
    }catch(err){
        alert('ankit bhai ruko');
    }
}

export const fetchRocketsApi = async() => {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/rockets');
        const data = await response.json();
        return data;
    }catch(err){
        alert('ankit bhai ek or err')
        console.log(err, 'errrrr')
    }
}

export const getWeatherData = async (coordinates) =>{
    try{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=bbf42423a4947553760248441e9ab27a`)
      const data = await response.json();
      return data;
    }catch(err){
      console.log(err)
    }
  }

