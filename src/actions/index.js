import * as types from "../constants/ActionTypes";
import axios from "axios";
const URL_API = "https://next-shop-rest-api.herokuapp.com/products";
export const fetchDataToServer = (sort, order, page, limit) => {
  return async dispatch => {
    const resp = await axios.get(
      `${URL_API}?_sort=${sort}&_order=${order}&_page=${page}&_limit=${limit}`
    );
    console.log(`${URL_API}?_sort=${sort}&_order=${order}`);
    const data = await resp.data;
    dispatch({
      type: types.FETCH_DATA_TO_SERVER,
      payload: data
    });
  };
};
export const fetchDataToPagination = page => {
  return async dispatch => {
    const limit = 12;
    const resp = await fetch(`${URL_API}?_page=${page}&_limit=${limit}`);
    console.log(`${URL_API}?_page=${page}&_limit=${limit}`);
    const resTotal = await resp.headers.get("X-Total-Count");
    const data = await resp.json();
    dispatch({
      type: types.PAGINATION,
      payload: data,
      resTotal,
      page
    });
  };
};
export const fetchDataToFilter = name => {
  return async dispatch => {
    const resp = await axios.get(`${URL_API}?name=${name}`);
    console.log(`${URL_API}?name=${name}`);
    const data = await resp.data;
    dispatch({
      type: types.FETCH_DATA_IN_FILTER,
      payload: data
    });
  };
};
export const search = keyword => {
  return async dispatch => {
    const resp = await axios.get(`${URL_API}?q=${keyword}`);
    console.log(`${URL_API}?q=${keyword}`);
    const data = await resp.data;
    dispatch({
      type: types.SEARCH,
      payload: data
    });
  };
};
