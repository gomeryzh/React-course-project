const getItems = state => state.menu.items;
const getFilter = state => state.menu.filter;

const filteredMenu = state => {
  const items = getItems(state);
  const filter = getFilter(state);

  return items.filter(item => item.description.toLowerCase().includes(filter));
};

export { getItems, getFilter, filteredMenu };
