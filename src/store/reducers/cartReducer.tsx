import actions from "../actions";

export default (state = {}, action: any) => {
  switch (action.type) {
    case actions.CART_CHANGE:
      return { ...state, cartChange: action.payload };

    default:
      return state;
  }
};
