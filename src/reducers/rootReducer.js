import * as types from "../constants/ActionTypes";
const initialState = {
  products: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DATA_TO_SERVER:
      // console.log(action.payload)
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
};
