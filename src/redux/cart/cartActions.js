import { cartTypes } from "./cartTypes";

export const addItem = item => dispatch => {
  dispatch({
    type: cartTypes.ADD_ITEM,
    payload: item
  });
};

export const removeItem = item => dispatch => {
  dispatch({ type: cartTypes.REMOVE_ITEM, payload: item });
};

export const clearItemFromCart = item => dispatch => {
  dispatch({
    type: cartTypes.CLEAR_ITEM_FROM_CART,
    payload: item
  });
};
