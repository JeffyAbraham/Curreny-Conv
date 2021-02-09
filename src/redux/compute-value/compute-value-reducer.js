

const INITIAL_STATE = {
  ExchangeRate: "",
};
const computeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_EXCHANGE_RATE":
      return {
        ...state,

        ExchangeRate: action.payload,
      };
    default:
      return state;
  }
};
export default computeReducer;
