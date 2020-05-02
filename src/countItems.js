export const countItems = (items) =>
  items.reduce(
    (prev, curr) => ({
      ...prev,
      [curr]: (prev[curr] || 0) + 1,
    }),
    {}
  );
