import React from "react";
import "./App.css";
import { ItemPicker } from "./ItemPicker";
import items from "./items";
import { MenuPreview } from "./MenuPreview";

const orderedItems = items.sort((a, b) => a.name.localeCompare(b.name));

export default () => (
  <div className="wrapper">
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>5 items</span>
          </div>
          <div className="col-6 menu-summary-right">
            6x <span className="dietary">ve</span>
            4x <span className="dietary">v</span>
            12x <span className="dietary">n!</span>
          </div>
        </div>
      </div>
    </div>
    <div className="container menu-builder">
      <div className="row">
        <div className="col-4">
          <ItemPicker items={orderedItems} />
        </div>
        <div className="col-8">
          <MenuPreview />
        </div>
      </div>
    </div>
  </div>
);
