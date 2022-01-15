import * as ActionTypes from '../actionTypes';

const testState = { name: 'camilo' };
export const userInfo = (state = testState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_USER_INFO:
      return action.payload;
    default:
      return state;
  }
};

export const userAppSettings = (state = testState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_USER_APP_SETTINGS:
      return action.payload;
    case ActionTypes.UPDATE_USER_APP_SETTINGS:
      return action.payload;
    default:
      return state;
  }
};
