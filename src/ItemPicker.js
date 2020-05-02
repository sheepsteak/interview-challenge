import React from "react";

export const ItemPicker = ({ items, onItemClick }) => (
  <ul className="item-picker">
    {items.map((item) => (
      <li className="item" data-testid="item-picker-item" key={item.id}>
        <h2>{item.name}</h2>
        <p>
          {item.dietaries.map((dietary) => (
            <span className="dietary" key={dietary}>
              {dietary}
            </span>
          ))}
        </p>
        <button
          className="add-item"
          onClick={() => onItemClick(item)}
          type="button"
        >
          +
        </button>
      </li>
    ))}
  </ul>
);
