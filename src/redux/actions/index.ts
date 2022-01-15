import * as ActionTypes from '../actionTypes';

export function setUserInfo(payload: any) {
  return {
    type: ActionTypes.SET_USER_APP_SETTINGS,
    payload,
  };
}

export function setUserAppSettings(payload: any) {
  return {
    type: ActionTypes.SET_USER_APP_SETTINGS,
    payload,
  };
}

export function updateUsertAppSettings(payload: any) {
  return {
    type: ActionTypes.UPDATE_USER_APP_SETTINGS,
    payload,
  };
}
