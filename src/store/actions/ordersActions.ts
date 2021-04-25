import actions from "./index";

export const getAddress = (response: any) => (dispatch: any) => {
  dispatch({ type: actions.GET_ADDRESS, payload: response });
};

export const getOrders = (response: any) => (dispatch: any) => {
  dispatch({ type: actions.GET_ORDERS, payload: response });
};
