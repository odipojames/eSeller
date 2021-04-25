import actions from "./index";

export const setAuth = (response: any) => (dispatch: any) => {
  return dispatch({ type: actions.SET_AUTH, payload: response });
};

export const getUser = (response: any) => (dispatch: any) => {
  return dispatch({ type: actions.GET_PROFILE, payload: response });
};
