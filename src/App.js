import React from "react";
import "./App.css";
import { countItems } from "./countItems";
import { ItemPicker } from "./ItemPicker";
import items from "./items";
import { MenuPreview } from "./MenuPreview";

const orderedItems = items.sort((a, b) => a.name.localeCompare(b.name));

const getDietaryTypes = (items) => {
  // Put all into ordered array so the result is sorted
  const all = items
    .reduce((prev, curr) => [...prev, ...curr.dietaries], [])
    .sort();

  return countItems(all);
};

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
    const { state } = this;
    const itemCount = state.selectedItems.length;
    const dietaryCounts = getDietaryTypes(state.selectedItems);

    return (
      <div className="wrapper">
        <div className="menu-summary">
          <div className="container">
            <div className="row">
              <div className="col-6 menu-summary-left">
                <span>{`${itemCount} ${
                  itemCount === 1 ? "item" : "items"
                }`}</span>
              </div>
              <div className="col-6 menu-summary-right">
                {Object.keys(dietaryCounts).map((d) => (
                  <React.Fragment key={d}>
                    {`${dietaryCounts[d]}x`}
                    <span className="dietary">{d}</span>
                  </React.Fragment>
                ))}
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
                items={state.selectedItems}
                onItemRemoveClick={this.handleItemRemoveClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
