import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import api from "../../utils/api";
import jwt_decode from "jwt-decode";

import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "./types";

// Login User
export const login = (loginData) => async (dispatch) => {
  dispatch({
    type: USER_LOGIN_REQUEST,
  });

  let data = null;
  try {
    await api.post("/auth/login", loginData).then((res) => {
      data = res.data;
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
    });
    console.log(data);

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const resError = error.response.data;
  
    console.log(resError);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: resError,
    });
  }
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: decoded,
  };
};

// Log user out
export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};
