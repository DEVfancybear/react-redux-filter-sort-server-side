import * as types from "../constants/ActionTypes";
const initialState = {
  products: [],
  page: null,
  totalItems: ""
};
export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DATA_TO_SERVER:
      // console.log(action.payload)
      return {
        ...state,
        products: action.payload
      };
    case types.PAGINATION:
      // console.log(action.payload)
      return {
        ...state,
        products: action.payload,
        page: action.page,
        totalItems: action.resTotal
      };
    case types.FETCH_DATA_IN_FILTER: {
      return {
        ...state,
        products: action.payload
      };
    }
    case types.SEARCH: {
      return {
        ...state,
        products: action.payload
      };
    }
    default:
      return state;
  }
};
