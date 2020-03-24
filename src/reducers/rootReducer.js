import * as types from "../constants/ActionTypes";
const initialState = {
  products: [],
  sort: "id",
  order: "desc"
};
export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DATA_TO_SERVER:
      return {
        ...state,
        products: action.payload,
        sort: action.sort,
        order: action.order
      };
    default:
      return state;
  }
};
