import { shallow } from "enzyme";
import React from "react";
import { MenuPreview } from "./MenuPreview";

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
  const menuPreview = shallow(
    <MenuPreview items={items} onItemRemoveClick={() => {}} />
  );

  const menuPreviewItems = menuPreview.find(".menu-preview").children();

  expect(menuPreviewItems).toHaveLength(3);
  expect(menuPreviewItems.at(0).text()).toContain(items[0].name);
  expect(menuPreviewItems.at(1).text()).toContain(items[1].name);
  expect(menuPreviewItems.at(2).text()).toContain(items[2].name);
});

it("calls onItemRemoveClick when item remove button is clicked", () => {
  const onItemRemoveClickMock = jest.fn();
  const menuPreview = shallow(
    <MenuPreview items={items} onItemRemoveClick={onItemRemoveClickMock} />
  );

  const previewItems = menuPreview.find(".menu-preview").children();
  previewItems.at(1).find("button").simulate("click");

  expect(onItemRemoveClickMock).toHaveBeenCalledTimes(1);
  expect(onItemRemoveClickMock).toHaveBeenCalledWith(items[1]);
});
