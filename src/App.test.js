import { mount } from "enzyme";
import React from "react";
import App from "./App";
import { countItems } from "./countItems";

it("adds to selected items when item is clicked", () => {
  const app = mount(<App />);

  expect(app.find("[data-testid='menu-preview-item']")).toHaveLength(0);

  const items = app.find("[data-testid='item-picker-item']");
  items.at(1).simulate("click");

  expect(app.find("[data-testid='menu-preview-item']")).toHaveLength(1);
  expect(app.find(".menu-summary-left").text()).toContain("1 item");
});

it("prevents same item being selected twice", () => {
  const app = mount(<App />);

  expect(app.find("[data-testid='menu-preview-item']")).toHaveLength(0);

  const items = app.find("[data-testid='item-picker-item']");
  items.at(1).simulate("click");

  expect(app.find("[data-testid='menu-preview-item']")).toHaveLength(1);

  items.at(1).simulate("click");

  expect(app.find("[data-testid='menu-preview-item']")).toHaveLength(1);
  expect(app.find(".menu-summary-left").text()).toContain("1 item");
});

it("removes item when its remove button is clicked", () => {
  const app = mount(<App />);

  expect(app.find("[data-testid='menu-preview-item']")).toHaveLength(0);
  expect(app.find(".menu-summary-left").text()).toContain("0 items");

  const items = app.find("[data-testid='item-picker-item']");
  items.at(1).simulate("click");

  const previewItems = app.find("[data-testid='menu-preview-item']");

  expect(previewItems).toHaveLength(1);
  expect(app.find(".menu-summary-left").text()).toContain("1 item");

  previewItems.at(0).find("button").simulate("click");

  expect(app.find("[data-testid='menu-preview-item']")).toHaveLength(0);
  expect(app.find(".menu-summary-left").text()).toContain("0 items");
});

it("keeps track of dietary types for selected items", () => {
  const app = mount(<App />);

  expect(app.find("[data-testid='menu-preview-item']")).toHaveLength(0);

  const items = app.find("[data-testid='item-picker-item']");
  items.at(1).simulate("click");
  items.at(2).simulate("click");
  items.at(3).simulate("click");

  expect(app.find("[data-testid='menu-preview-item']")).toHaveLength(3);
  expect(app.find(".menu-summary-left").text()).toContain("3 items");

  const getDietaryForItem = (itemNumber) =>
    items
      .at(itemNumber)
      .find(".dietary")
      .map((id) => id.text());

  // Get the different dietary requirements and sum them
  // similar to what happens during render.
  const itemDietaryCounts = countItems([
    ...getDietaryForItem(1),
    ...getDietaryForItem(2),
    ...getDietaryForItem(3),
  ]);

  Object.entries(itemDietaryCounts).forEach(([diet, count]) => {
    expect(app.find(".menu-summary-right").text()).toContain(
      `${count}x${diet}`
    );
  });
});
