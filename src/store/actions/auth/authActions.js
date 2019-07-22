import * as types from '../actionTypes';
import ThreeAxisSensor from 'expo-sensors/build/ThreeAxisSensor';
import axios from 'react-native-axios';
import {LOG_IN, SIGN_UP} from '../../../https/endpoints';


export const logIn = (email, password) => dispatch => {
  // Api call logic
  axios.post(LOG_IN,
    {
      email: email,
      password: password
    }
  ).then(function(response) {
    console.log('Authenticated');
    console.log(response)
  }).catch(function(error) {
    console.log('Error Authentication');
    console.log(error);
  });


console.log('axios place');
console.log('axios', email, password);

return {
  type: types.LOGIN_USER,
  payload: 'login'
};

};

export const signUp = (email, password) => dispatch => {
  // Api call logic
  axios.post(SIGN_UP,
    {
      email: email,
      password: password
    }
  ).then(function(response) {
    console.log('Create new user');
    console.log(response)
  }).catch(function(error) {
    console.log('Error on Creating new user');
    console.log(error);
  });


  console.log('axios place');
  console.log('axios', email, password);

  return {
    type: types.REGISTER_USER,
    payload: 'register'
  };
};
