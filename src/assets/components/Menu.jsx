import React from "react";
import menuImg from "../imgs/tablesetting.jpg";
import "../scss/menu.scss";

const menu = [
  {
    id: "1",
    title: "Bread Basket",
    description: "Assortment of fresh baked fruit breads and muffins 5.50",
  },
  {
    id: "2",
    title: "Honey Almond Granola with Fruits",
    description: "Natural cereal of honey toasted oats, raisins, almonds and dates 7.00",
  },
  {
    id: "3",
    title: "Belgian Waffle",
    description: "Vanilla flavored batter with malted flour 7.50",
  },
  {
    id: "4",
    title: "Scrambled eggs",
    description: "Scrambled eggs, roasted red pepper and garlic, with green onions 7.50",
  },
  {
    id: "5",
    title: "Blueberry Pancakes",
    description: "With syrup, butter and lots of berries 8.50",
  },
];
export default function Menu() {
  return (
    <>
      <div id="menu" className="menu">
        <div className="menu-content">
          <h1>our menu</h1>
          <br />
          {menu.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <br />
              </React.Fragment>
            );
          })}
        </div>
        <div className="menu-img">
          <img src={menuImg} alt="Menu" />
        </div>
      </div>
      <hr />
    </>
  );
}
