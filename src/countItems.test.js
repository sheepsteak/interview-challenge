import { countItems } from "./countItems";

it("returns item counts", () => {
  const items = ["a", "b", "c", "c", "b", "a"];

  const result = countItems(items);

  expect(result).toEqual({
    a: 2,
    b: 2,
    c: 2,
  });
});

it("returns empty object when no items", () => {
  const items = [];

  const result = countItems(items);

  expect(result).toEqual({});
});
