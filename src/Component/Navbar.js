import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchData } from "../Redux/action";

import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  dispatch(searchData(search));
  const Searching = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="nav_bar">
        <img
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt="logo"
        />

        <input
          type="text"
          placeholder="Search Product & more items..."
          onChange={Searching}
        />
        <button>
          <Link to="./account">Login</Link>
        </button>

        <button>
          <Link to="./Cart"> Cart</Link>
        </button>
      </div>
    </div>
  );
};

export { Navbar };
