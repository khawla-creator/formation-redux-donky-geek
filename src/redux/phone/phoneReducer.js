import { BUY_PHONE } from "./types";
const initialStatephone= {
  phones: 5
}

 const phoneReducer = (state = initialStatephone,action) => {
      switch (action.type) {
        case BUY_PHONE :
          return {
            ...state,
            phones : state.phones - action.payload
          }
      
        default: return state
      }
}
export default phoneReducer;