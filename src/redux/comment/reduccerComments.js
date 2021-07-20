import {LOAD_COMMENTS_SUCCESS , LOAD_COMMENTS_ERROR, LOAD_COMMENTS}from './typesCommet'


const initialStateComments = {
isloading : false,
comments: [],
error :''
}

const commentReducer = (state=initialStateComments,action) => {
switch (action.type) {
  case LOAD_COMMENTS: 
return {
        ...state, 
        isloading: true,
}

  case LOAD_COMMENTS_SUCCESS:
    return {
      ...state, 
      isloading: false,
      comments: action.payload,
      error: ''
    }

  case LOAD_COMMENTS_ERROR:
  return {
    ...state, 
    isloading: false,
    comments: [],
    error: action.payload
  }
    

  default: return state
}
}

export default commentReducer