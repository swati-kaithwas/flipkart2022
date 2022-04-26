import {
  STORE_DATA,
  SEARCH_DATA,
  ADD_CART,
  DELETE_CART,
  REMOVE_ALL,
  INC_ITEM,
  DEC_ITEM,
  ITEM_CART

} from "./ActionTypes/actiontype";
export const StoreData = (payload) => ({
  type: STORE_DATA,
  payload: payload,
});

export const searchData = (payload) => ({
  type: SEARCH_DATA,
  payload: payload,
});
export const AddCart = (payload) => ({
  type: ADD_CART,
  payload: payload,
});
export const ItemCart = (payload) => ({
  type: ITEM_CART,
  payload: payload,
});
export const incrementitem = (payload) => ({
  type: INC_ITEM,
  payload: payload,
});
export const decrementitem = (payload) => ({
  type: DEC_ITEM,
  payload: payload,
});


export const DeleteCart = (payload) => ({
  type: DELETE_CART,
  payload: payload,
});
export const RemoveAllcart = () => ({
  type: REMOVE_ALL,
});
