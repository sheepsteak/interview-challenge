import { mount } from "enzyme";
import React from "react";
import App from "./App";

it("renders", () => {
  mount(<App />);
});

it("adds to selected items when item is clicked", () => {
  const app = mount(<App />);

  expect(app.find("[data-testid='menu-preview-item']")).toHaveLength(0);

  const items = app.find("[data-testid='item-picker-item']");
  items.at(1).simulate("click");

  expect(app.find("[data-testid='menu-preview-item']")).toHaveLength(1);
});

it("prevents same item being selected twice", () => {
  const app = mount(<App />);

  expect(app.find("[data-testid='menu-preview-item']")).toHaveLength(0);

  const items = app.find("[data-testid='item-picker-item']");
  items.at(1).simulate("click");

  expect(app.find("[data-testid='menu-preview-item']")).toHaveLength(1);

  items.at(1).simulate("click");

  expect(app.find("[data-testid='menu-preview-item']")).toHaveLength(1);
});

it("removes item when its remove button is clicked", () => {
  const app = mount(<App />);

  expect(app.find("[data-testid='menu-preview-item']")).toHaveLength(0);

  const items = app.find("[data-testid='item-picker-item']");
  items.at(1).simulate("click");

  const previewItems = app.find("[data-testid='menu-preview-item']");

  expect(previewItems).toHaveLength(1);

  previewItems.at(0).find("button").simulate("click");

  expect(app.find("[data-testid='menu-preview-item']")).toHaveLength(0);
});
