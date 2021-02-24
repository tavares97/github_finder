import React, { useReducer } from 'react';
//CONTEXT
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
//IMPORT TYPES
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //SETS AN ALERT
  const showAlert = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 2500);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        showAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
