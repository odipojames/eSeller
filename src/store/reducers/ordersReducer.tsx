import actions from "../actions";

const OrdersReducer = (state = {}, action: any) => {
  switch (action.type) {
    case actions.GET_ADDRESS:
      return { ...state, address: action.payload };
    case actions.GET_ORDERS:
      return { ...state, orders: action.payload };
    default:
      return state;
  }
};

export default OrdersReducer;
