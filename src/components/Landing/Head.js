// import * as React from "react";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import { Navigate } from "react-router-dom";
// import { ShowProduct } from "./ShowProduct";
// import { useDispatch, useSelector } from "react-redux";
// import { StoreData } from "../../Redux/Action/action";
// const Head = () => {
//   const dispatch = useDispatch();
//   dispatch(() => {
//     fetch("http://localhost:3000/productdata")
//       .then((res) => res.json())
//       .then((res) => dispatch(StoreData(res)))
//       .catch((err) => console.log(err));
//   }, []);
//   const x = useSelector((state) => state.productreducer.data);
//   console.log(x);

//   return (
//     <Stack spacing={6} direction="row">
//       <Button variant="text">
//         <img
//           src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
//           width="80px"
//           height="80px"
//           alt="topoffer"
//         />
//         {/* Top Offers */}
//       </Button>

//       <Button variant="text">
//         <img
//           src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
//           width="80px"
//           height="80px"
//           alt="Grocery"
//         />
//         {/* <p className="pp">Grocery</p> */}
//       </Button>
//       <Button
//         variant="text"
//         onClick={() => Navigate(`/ShowProduct/$'{Mobile'}`)}
//       >
//         <img
//           src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
//           width="80px"
//           height="80px"
//           alt="Mobile"
//         />
//         {/* Mobile */}
//       </Button>
//       <Button
//         variant="text"
//         onClick={() => Navigate(`/ShowProduct/${"Mobile"}`)}
//       >
//         <img
//           src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"
//           width="80px"
//           height="80px"
//           alt="Fashion"
//         />
//         {/* Fashion */}
//       </Button>
//       <Button
//         variant="text"
//         onClick={() => Navigate(`/ShowProduct/${"Fashion"}`)}
//       >
//         <img
//           src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
//           width="80px"
//           height="80px"
//           alt="Electronics"
//         />
//         {/* Electronics */}
//       </Button>
//       <Button
//         variant="text"
//         onClick={() => Navigate(`/ShowProduct/${"ElectronicMobile"}`)}
//       >
//         <img
//           src="https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100"
//           width="80px"
//           height="80px"
//           alt="Home"
//         />
//         {/* Home */}
//       </Button>
//       <Button
//         variant="text"
//         onClick={() => Navigate(`/ShowProduct/${"Mobile"}`)}
//       >
//         <img
//           src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
//           width="80px"
//           height="80px"
//           alt="Appliances"
//         />
//         {/* Appliances */}
//       </Button>
//       <Button
//         variant="text"
//         onClick={() => Navigate(`/ShowProduct/${"Mobile"}`)}
//       >
//         <img
//           src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
//           width="80px"
//           height="80px"
//           alt="Travel"
//         />
//         {/* Travel */}
//       </Button>
//       <Button
//         variant="text"
//         onClick={() => Navigate(`/ShowProduct/${"Mobile"}`)}
//       >
//         <img
//           src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
//           width="80px"
//           height="80px"
//           alt="Beauty, Toys & More"
//         />
//         {/* Beauty, Toys & More */}
//       </Button>
//     </Stack>
//   );
// };

// export { Head };
