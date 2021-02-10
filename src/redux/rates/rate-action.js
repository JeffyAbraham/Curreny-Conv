import Axios from "axios";

export const setRates = (data) => ({
  type: "SET_RATE",
  payload: data,
});
export const startGetData = () => ({
  type: "START_ASYNC",
});
export const getData = () => {
  return (dispatch) => {
     
    startGetData();

    Axios.get("https://api.exchangeratesapi.io/latest")
      .then((res) => {
        dispatch(setRates(res.data));
      })

      .catch((err) => {
        console.log(err);
      });
  };
};
