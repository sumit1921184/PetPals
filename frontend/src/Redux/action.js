// actions.js

import axios from 'axios';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
  } from './actionTypes';
  
  // Action creators
  export const loginRequest = () => ({
    type: LOGIN_REQUEST,
  });
  
  export const loginSuccess = (userData) => ({
    type: LOGIN_SUCCESS,
    payload: userData, // You can pass additional data with the payload
  });
  
  export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
  });
  
  export const logoutRequest = () => ({
    type: LOGOUT_REQUEST,
  });
  
  export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
  });
  
  export const logoutFailure = (error) => ({
    type: LOGOUT_FAILURE,
    payload: error,
  });
  export const loginUser = (formData) => (dispatch) => {
    return new Promise((resolve) => {
      dispatch({type: LOGIN_REQUEST});
      axios.get('https://moke-api-server.onrender.com/Users')
          .then((res) => {
            console.log(res.data);
            const allow = res.data.find((el) =>
              el.email == formData.email && el.password == formData.password,
            );
            console.log(allow);
            const token = Math.random();
            if (allow) {
              resolve(true);
              dispatch({type: LOGIN_SUCCESS, payload: token});
            } else {
              alert('Invalid Credentials,Please Check the credentials');
            }
          // dispatch({type:LOGIN_SUCCESS,payload:res.data})
          })
          .catch((error) => {
            resolve(false);
  
            console.log(error);
            dispatch({type: LOGIN_FAILURE});
          });
    });
  };
  
  export const userLogout = (dispatch) => {
    dispatch({type: LOGOUT_SUCCESS});
  };
  