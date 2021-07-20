// dans le cas ou on a plusieurs reduceurs 

import {createStore, combineReducers, applyMiddleware} from 'redux'
import phoneReducer from '../phone/phoneReducer'
import tvReducer from '../tv/reduceurTv'
import reducerComments from '../comment/reduccerComments'
import thunk from 'redux-thunk'

const rootReducer =  combineReducers({
  phone: phoneReducer,
  television : tvReducer,
  comments: reducerComments

})
const store = createStore(rootReducer,applyMiddleware(thunk))

export default store;



//=======dans le acas ou on un seul reduceur 

// import {createStore} from 'redux'
// import phoneReducer from '../phone/phoneReducer'


// const store = createStore(phoneReducer)

// export default store;


