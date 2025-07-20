import { products } from "@/data/products";

export const initialState = {
  price: [20, 500],

  brands: [],
  filtered: products,
  sortingOption: "Sort by (Default)",
  sorted: products,
  currentPage: 1,
  itemPerPage: 6,
};

export function reducer(state, action) {
  switch (action.type) {
    case "SET_PRICE":
      return { ...state, price: action.payload };

    case "SET_BRANDS":
      return { ...state, brands: action.payload };
    case "SET_FILTERED":
      return { ...state, filtered: [...action.payload] };
    case "SET_SORTING_OPTION":
      return { ...state, sortingOption: action.payload };
    case "SET_SORTED":
      return { ...state, sorted: [...action.payload] };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "TOGGLE_FILTER_ON_SALE":
      return { ...state, activeFilterOnSale: !state.activeFilterOnSale };
    case "SET_ITEM_PER_PAGE":
      return { ...state, itemPerPage: action.payload };
    case "CLEAR_FILTER":
      return {
        ...state,
        price: [20, 500],

        brands: [],
      };
    default:
      return state;
  }
}
