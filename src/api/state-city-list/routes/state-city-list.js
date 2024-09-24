module.exports = {
    routes: [
      {
        method: "GET",
        path: "/states-cities",
        handler: "state-city-list.getStateCityList",
        config: {
          policies: []
        }
      }
    ]
  }
  