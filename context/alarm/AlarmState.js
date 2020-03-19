import React, {useReducer} from 'react';
import alarmContext from './alarmContext';
import alarmReducer from './alarmReducer';

import {ADD_ALARM} from '../types';

const AlarmState = props => {
  const initialState = {
    alarms: [
      {
        hr: 1,
        min: 12,
      },
      {
        hr: 2,
        min: 22,
      },
    ],
  };

  const [state, dispatch] = useReducer(alarmReducer, initialState);

  const addAlarm = alarmtime => {
    dispatch({type: ADD_ALARM, payload: alarmtime});
  };

  return (
    <alarmContext.Provider
      value={{
        alarms: state.alarms,
        addAlarm,
      }}>
      {props.chlidren}
    </alarmContext.Provider>
  );
};

export default AlarmState;
