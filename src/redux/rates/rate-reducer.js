
const INITIAL_STATE = {
dailyRa:'',
isLoading:true


};
export const rateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_RATE":
      return {
        ...state,dailyRa:action.payload,isLoading: false
     
      };


      case "START_ASYNC":
        return {
          ...state,isLoading:true
       
        };  

 

    default:
      return state;
  }
};
export default rateReducer;
