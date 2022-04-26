import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Producthead = () => {
  const [first, setFirst] = useState([]);
  const [showdata, setShowdata] = useState(first);
  const [category, setCategory] = useState("");
  const x = useSelector((state) => state.reducer.data);

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
                setCategory("Grocery");
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
                setCategory("Fashion wear");
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
                setCategory("Electronics");
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
                setCategory("Appliances");
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
                setCategory("Travel");
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
                setCategory("Beauty, Toys & More");
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
                setCategory("Beauty, Toys & More");
              }}
              src="https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100"
              width="80px"
              height="80px"
              alt="Home"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
export { Producthead };
