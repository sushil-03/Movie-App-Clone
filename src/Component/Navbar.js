import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "white",
          alignItem: "center",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            gap: "10px",
          }}
        >
          <img src="/logo.png" alt="" style={{ height: 50, widht: 50 }} />

          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h1>Movies App</h1>
          </Link>
        </div>
        <Link
          to="/favourites"
          style={{ textDecoration: "none", color: "black " }}
        >
          <h2 style={{ marginTop: ".5rem" }}>Favourite</h2>
        </Link>
      </div>
    );
  }
}
