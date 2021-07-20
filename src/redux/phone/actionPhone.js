import {BUY_PHONE} from './types';

export const buyphone = totalPhone => {
  return {
    type: BUY_PHONE,
    payload: totalPhone
  }
}