// action 
const BUY_PHONE = 'BUY_PHONE';
const BUY_TABLET = 'BUY_TABLET';


function buyPhone () {
  return { 
  type: BUY_PHONE
}
}

 function buytablet () {
   return {
     type: BUY_TABLET
   }
 }
// reducer 


 const initialstate ={ 
    phones: 5,
    tablets : 10
  } 

const reducer =(state =initialstate, action ) => {

switch (action.type) {
  case BUY_PHONE:
    return {
      ...state, 
      phones: state.phones -1
    }
    break ;
    case BUY_TABLET:
    return {
      ...state, 
      tablets: state.tablets -1
    }

  default: return state
}
}
;

