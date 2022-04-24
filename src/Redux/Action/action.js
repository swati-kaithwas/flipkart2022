// ADD_CART,
// DELETE_CART,
// REMOVE_ALL,

import { STORE_DATA, SEARCH_DATA } from "../ActionTypes/actiontype";
const StoreData = (payload) => ({
  type: STORE_DATA,
  payload: payload,
});

const searchData = (payload) => ({
  type: SEARCH_DATA,
  payload: payload,
});
//  const AddCart = (payload) => ({
//   type: ADD_CART,
//   payload: payload,
// });
//  const DeleteCart = (payload) => ({
//   type: DELETE_CART,
//   payload: payload,
// });
//  const RemoveAllcart = () => ({
//   type: REMOVE_ALL,
// });

export { StoreData, searchData };
// ,RemoveAllcart,DeleteCart,AddCart};
