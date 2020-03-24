import * as types from "../constants/ActionTypes";
import axios from "axios";
const URL_API = "https://next-shop-rest-api.herokuapp.com/products";
export const fetchDataToServer = (sort, order) => {
  return async dispatch => {
    const resp = await axios.get(`${URL_API}?_sort=${sort}&_order=${order}`);
    const data = await resp.data;
    dispatch({
      type: types.FETCH_DATA_TO_SERVER,
      payload: data,
      sort,
      order
    });
  };
};
