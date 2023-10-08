import React, { useState } from "react";
import ProductInfo from "./ProductInfo";

const Product = () => {
  const [item, setItem] = useState(ProductInfo);
  const [cakeItem, setCakeItem] = useState(ProductInfo[0]);
  const [posItem, setpos] = useState(0);
  const selectCake = (pos) => {
    setCakeItem(ProductInfo[pos]);
    setpos(pos);
  };

  return (
    <>
      <div className="container">
        <h1>Cakeopia Confections Bakery</h1>
        <p>Creating Sweet Memories, One Slice at a Time!</p>
        <div className="cakeContainer">
          {item.map((item, pos) => {
            const arr = ["classImg"];
            if (pos === posItem) {
              arr.push("classImgBorder");
            }
            return (
              <img
                className={arr.join("")}
                src={item.image}
                onClick={() => {
                  selectCake(pos);
                }}
                alt=""
              />
            );
          })}
        </div>

        <div className="cakeInfo">
          <h1>{cakeItem.name}</h1>
          <img src={cakeItem.image} alt="chocolate cake" />
          <p>{cakeItem.description}</p>
          <div className="bottomBox">
            <h4>
              Price <span className="priceBg">{cakeItem.price}</span>{" "}
            </h4>
            <h4>
              <span className="rateBg">{cakeItem.rating}</span>{" "}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
