// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { DeleteCart } from "../redux/Action/action";

// const Cart = () => {
//   const dispatch = useDispatch();
//   const data = useSelector((state) => state.reducer.data);
//   console.log("cart", data);
//   const cartproducts = useSelector((state) => state.reducer.cart);
//   const handlecartRemove = (idx) => {
//     const filterdata = cartproducts.filter((e) => {
//       return e.id !== idx;
//     });
//     console.log(filterdata);
//     dispatch(DeleteCart(idx));
//   };

//   console.log(cartproducts);
//   let cartProduct = cartproducts;
//   return (
//     <>
//       <div>
//         {cartProduct.map((ele) => {
//           return (
//             <div className="page" key={ele.id}>
//               <div className="img">
//                 <img src={ele.img} alt="product" />
//               </div>
//               <div className="text">
//                 <p style={{ color: "gray" }}> {`Brand : ${ele.brand}`}</p>
//                 <p>{`${ele.name}`}</p>
//                 <p>{`Price Rs.  ${ele.price}`}</p>
//                 <button
//                   onClick={() => {
//                     alert("payment");
//                   }}
//                 >
//                   Buy Product
//                 </button>
//                 <button onClick={() => handlecartRemove(ele.id)}>
//                   remove item
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export { Cart };
