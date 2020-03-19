import {ADD_ALARM} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_ALARM:
      return {
        ...state,
        alarms: [action.payload, ...state.alarms],
      };
    default:
      return state;
  }
};
