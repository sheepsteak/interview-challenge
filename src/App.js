import React from "react";
import "./App.css";
import { ItemPicker } from "./ItemPicker";
import items from "./items";
import { MenuPreview } from "./MenuPreview";

const orderedItems = items.sort((a, b) => a.name.localeCompare(b.name));

export default class App extends React.Component {
  state = {
    selectedItems: [],
  };

  handleItemClick = (item) =>
    this.setState((state) => {
      // Prevent item being added twice
      if (state.selectedItems.find((i) => i.id === item.id)) {
        return state;
      }

      return {
        ...state,
        selectedItems: [...state.selectedItems, item],
      };
    });

  handleItemRemoveClick = (item) =>
    this.setState((state) => {
      const selectedItems = state.selectedItems.reduce((prev, curr) => {
        if (curr.id === item.id) {
          return prev;
        }

        return [...prev, curr];
      }, []);

      return {
        ...state,
        selectedItems,
      };
    });

  render() {
    return (
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
              <ItemPicker
                items={orderedItems}
                onItemClick={this.handleItemClick}
              />
            </div>
            <div className="col-8">
              <MenuPreview
                items={this.state.selectedItems}
                onItemRemoveClick={this.handleItemRemoveClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
