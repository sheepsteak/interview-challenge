import { shallow } from "enzyme";
import React from "react";
import { ItemPicker } from "./ItemPicker";

const items = [
  {
    id: 1001,
    name: "Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens",
    dietaries: ["v", "ve", "df", "gf", "n!"],
  },
  {
    id: 1002,
    name: "Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots",
    dietaries: ["gf", "df", "rsf"],
  },
  {
    id: 1003,
    name: "Dill & Swiss Chard Potato Cakes, Summer Tabbouleh & Roasted Roots",
    dietaries: ["gf", "df", "v", "ve", "n!"],
  },
];

it("renders passed items", () => {
  const itemPicker = shallow(
    <ItemPicker items={items} onItemClick={() => {}} />
  );

  const itemPickerItems = itemPicker.find(".item-picker").children();

  expect(itemPickerItems).toHaveLength(3);
  expect(itemPickerItems.at(0).text()).toContain(items[0].name);
  expect(itemPickerItems.at(1).text()).toContain(items[1].name);
  expect(itemPickerItems.at(2).text()).toContain(items[2].name);
});

it("calls onItemClick when item is clicked", () => {
  const onItemClickMock = jest.fn();
  const itemPicker = shallow(
    <ItemPicker items={items} onItemClick={onItemClickMock} />
  );

  const itemPickerItems = itemPicker.find(".item-picker").children();
  itemPickerItems.at(1).find("button").simulate("click");

  expect(onItemClickMock).toHaveBeenCalledTimes(1);
  expect(onItemClickMock).toHaveBeenCalledWith(items[1]);
});
