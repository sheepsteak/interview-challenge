import React from "react";

export const MenuPreview = ({ items, onItemRemoveClick }) => (
  <div>
    <h2>Menu preview</h2>
    <ul className="menu-preview">
      {items.map((item) => (
        <li className="item" data-testid="menu-preview-item" key={item.id}>
          <h2>{item.name}</h2>
          <p>
            {item.dietaries.map((dietary) => (
              <span className="dietary" key={dietary}>
                {dietary}
              </span>
            ))}
          </p>
          <button
            className="remove-item"
            onClick={() => onItemRemoveClick(item)}
            type="button"
          >
            x
          </button>
        </li>
      ))}
    </ul>
  </div>
);
