import actions from "./index";

export const setCategories = (response: any) => (dispatch: any) => {
  dispatch({ type: actions.SET_CATEGORIES, payload: response });
};

export const setCurrentCategory = (response: any) => (dispatch: any) => {
  dispatch({ type: actions.SET_CURRENT_CATEGORY, payload: response });
};
export const setCurrentSub = (response: any) => (dispatch: any) => {
  dispatch({ type: actions.SET_CURRENT_SUB, payload: response });
};
