import actions from "./index";

export const updateCart = (change: any) => (dispatch: any) => {
  return dispatch({ type: actions.CART_CHANGE, payload: change });
};
