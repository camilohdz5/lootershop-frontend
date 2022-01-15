const getState = (state: any) => state;

// user
export const getUserInfo = (state: any) => getState(state).userInfo;
export const getUserId = (state: any) => getState(state).userInfo.id;

// Settings
export const getUserSettings = (state: any) => getState(state).userAppSettings;
export const getUserTheme = (state: any) => getState(state)?.userAppSettings?.theme;
