import { GET_DATA } from "./actionTypes";

const initialState = {
  cars: null,
};

const carReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DATA:
      console.log(payload);
      return { ...state, cars: payload };
    default:
      return state;
  }
};

export default carReducer;
