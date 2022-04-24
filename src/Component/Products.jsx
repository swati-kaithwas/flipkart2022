import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreData } from "../Redux/Action/action";
import "./Products.css";

const Products = () => {
  const [first, setFirst] = useState([]);
  const [showdata, setShowdata] = useState(first);
  const [funsorting, setFunsorting] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:3000/productdata")
      .then((res) => res.json())
      .then((res) => dispatch(StoreData(res)))
      .catch((err) => console.log(err));
  }, []);
  const x = useSelector((state) => state.reducer.data);
  const y = useSelector((state) => state.reducer.search);

  useEffect(() => {
    setFirst(x);
  });

  console.log(first);
  const filtterproduct = (category) => {
    const productlist = first.filter(
      (c) => c.category.toLowerCase() === category.toLowerCase()
    );
    setShowdata(productlist);
  };
  // const hightolow = (price) => {
  //   const pricewise = first.sort((a, b) => a.price - b.price);
  // };
  // const lowtohigh = (price) => {
  //   const pricew = first.sort((a, b) => b.price - a.price);
  // };
  // const ratingSorthigh = (Rating) => {
  //   const sorthigh = first.sort((a, b) => a.Rating - b.Rating);
  // };
  // const ratingSortLow = (Rating) => {
  //   const sortLow = first.sort((a, b) => a.Rating - b.Rating);
  // };
  return (
    <div>
      <div>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "60px",
          }}
        >
          <li
            onClick={() => {
              setShowdata(x);
            }}
          >
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
              width="80px"
              height="80px"
              alt="topoffer"
            />
          </li>
          <li>
            <img
              onClick={() => {
                filtterproduct("Grocery");
              }}
              src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
              width="80px"
              height="80px"
              alt="Grocery"
            />
          </li>
          <li>
            <img
              onClick={() => {
                filtterproduct("Fashion wear");
              }}
              src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"
              width="80px"
              height="80px"
              alt="Fashion"
            />
          </li>
          <li>
            <img
              onClick={() => {
                filtterproduct("Electronics");
              }}
              src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
              width="80px"
              height="80px"
              alt="Electronics"
            />
          </li>
          <li>
            <img
              onClick={() => {
                filtterproduct("Appliances");
              }}
              src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
              width="80px"
              height="80px"
              alt="Appliances"
            />
          </li>
          <li>
            <img
              onClick={() => {
                filtterproduct("Travel");
              }}
              src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
              width="80px"
              height="80px"
              alt="Travel"
            />
          </li>
          <li>
            <img
              onClick={() => {
                filtterproduct("Beauty, Toys & More");
              }}
              src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
              width="80px"
              height="80px"
              alt="Beauty, Toys & More"
            />
          </li>
          <li>
            <img
              onClick={() => {
                filtterproduct("Beauty, Toys & More");
              }}
              src="https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100"
              width="80px"
              height="80px"
              alt="Home"
            />
          </li>
        </ul>
      </div>
      {/* 
      {/* <button
        onClick={() => {
          hightolow("price");
        }}
      >
        High To Low
      </button>
      <button
        onClick={() => {
          lowtohigh("price");
        }}
      >
        Low To High
      </button>

      <button
        onClick={() => {
          ratingSortLow("Rating");
        }}
      >
        Rating Low To High
      </button>

      <button
        onClick={() => {
          ratingSorthigh("Rating");
        }}
      >
        Rating High To Low
      </button> */}
      <button
        onClick={() => {
          setFunsorting("high to low");
        }}
      >
        High To Low
      </button>
      <br />
      <button
        onClick={() => {
          setFunsorting("low to high");
        }}
      >
        Low To High
      </button>
      <br />
      <div>
        {showdata
          .filter((el) => {
            if (y === " ") {
              return el;
            } else if (el.name.toLowerCase().includes(y.toLowerCase())) {
              return el;
            } else if (el.category.toLowerCase().includes(y.toLowerCase())) {
              return el;
            }
          })

          .sort((a, b) => {
            if (funsorting == "") {
              return;
            } else if (funsorting == "low to high") {
              return a.price - b.price;
            } else if (funsorting == "high to low") {
              return b.price - a.price;
            }
          })
          .map((e) => {
            return (
              <div>
                <div>
                  <img height="220px" width="200px" src={e.img} />
                </div>
                <div>
                  <p> {e.name}</p>
                  <p> {e.Brand}</p>
                  <p> {e.category}</p>
                  <p> {e.price}</p>
                  <p> {e.Rating}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export { Products };
// "Rating":4.6
