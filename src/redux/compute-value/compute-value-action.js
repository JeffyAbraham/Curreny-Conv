import Axios from "axios";

export const setExchangeRate = (value) => ({
  type: "SET_EXCHANGE_RATE",
  payload: value,
});
export const setError = () => ({
  type: "SET_ERROR",
});

export const makeApiReq = (base, target) => {
  return (dispatch) => {
    console.log(base);
    Axios.get(
      `https://api.exchangeratesapi.io/latest?symbols=${base},${target}`
    )
      .then(({ data: { rates } }) => {
        var exchangeRate = rates[base] / rates[target];
        dispatch(setExchangeRate(exchangeRate.toFixed(2)));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
