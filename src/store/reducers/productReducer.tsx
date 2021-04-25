import actions from "../actions";

export default (state = {}, action: any) => {
  switch (action.type) {
    case actions.SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case actions.SET_CURRENT_CATEGORY:
      return { ...state, currentCategory: action.payload };
    case actions.SET_CURRENT_SUB:
      return { ...state, currentSub: action.payload };
    default:
      return state;
  }
};
