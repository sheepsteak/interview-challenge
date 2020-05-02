import React from "react";

export const ItemPicker = ({ items }) => (
  <ul className="item-picker">
    {items.map((item) => (
      <li className="item" key={item.id}>
        <h2>{item.name}</h2>
        <p>
          {item.dietaries.map((dietary) => (
            <span className="dietary" key={dietary}>
              {dietary}
            </span>
          ))}
        </p>
      </li>
    ))}
  </ul>
);
