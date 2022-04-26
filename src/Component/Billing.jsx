import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Billing = () => {
  const data = useSelector((state) => state.reducer.data);
  console.log("cart", data);
  const cartproducts = useSelector((state) => state.reducer.cart);
  //   const handlecartRemove = (idx) => {
  //     const filterdata = cartproducts.filter((e) => {
  //       return e.id !== idx;
  //     });

  //     console.log(filterdata);
  //     dispatch(DeleteCart(idx));
  //   };
  //   const RemoveItem = (idx) => {
  //     dispatch(decrementitem(idx));
  //   };
  //   const Additem = (idx) => {
  //     dispatch(incrementitem(idx));
  //   };

  //   console.log(cartproducts);
  let cartProduct = cartproducts;
  //   let newArray = [];

  // Declare an empty object
  // let uniqueObject = {};

  // // Loop for the array elements
  // for (let i in cartProduct) {
  //   // Extract the title
  //   let objid = cartProduct[i]["id"];

  //   // Use the title as the index
  //   if (uniqueObject[objid] == undefined) {
  //     uniqueObject[objid] = cartProduct[i];
  //     uniqueObject[objid]["quantity"] = 1;
  //   } else {
  //     let quan = uniqueObject[objid]["quantity"];
  //     uniqueObject[objid]["quantity"] = quan + 1;
  //   }
  // }

  // // Loop to push unique object into array
  // for (let i in uniqueObject) {
  //   newArray.push(uniqueObject[i]);
  // }
  // useEffect(() => dispatch(ItemCart(newArray)), []);

  // console.log("newArray:", newArray);
  let total = 0;
  for (let x in cartProduct) {
    total += x.price * x.quantity;
  }
  console.log(total);
  return (
    // <>
    <>
      <div>
        {cartProduct.map((ele) => {
          return (
            <div className="page" key={ele.id}>
              {/* <h1>hello</h1> */}
              <div className="img">
                <img src={ele.img} alt="product" />
              </div>
              <div className="text">
                <p> {`brand : ${ele.brand}`}</p>
                <p> {`quantity: ${ele.quantity}`}</p>
                <p>{`${ele.name}`}</p>
                <p>{`Price Rs.  ${ele.price}`}</p>
                <p>{`total product price:${ele.price * ele.quantity}`}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div>total amount:{total}</div>
    </>
  );
};

export { Billing };
