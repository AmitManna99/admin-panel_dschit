//import axios from 'axios'

export const createEvent = (event) => {


  return (dispatch, getState) => {

    let token = getState().firebase.auth.stsTokenManager.accessToken;
    let user = getState().firebase.auth.email;
    let id = event.eventName.toLowerCase() + event.date.toLowerCase()
    id = id.replace(/\s/g, '-')

    event = { ...event, id: id, createdBy: user }

    var axios = require('axios');
    var data = JSON.stringify(event);

    var config = {
      method: 'post',
      url: 'https://cors-anywhere.herokuapp.com/https://dschit-staging.herokuapp.com/events',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

  }
};