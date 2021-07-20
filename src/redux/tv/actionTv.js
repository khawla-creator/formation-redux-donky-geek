import {BUY_TV} from './typesTv.js'

export const buytv = totalTv => {
  return {
      type: BUY_TV,
      payload: totalTv
  }
} 
