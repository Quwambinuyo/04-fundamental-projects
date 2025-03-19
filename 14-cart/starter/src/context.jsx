import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";
import cartItems from "./data";

import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./action";
import { getTotals } from "./utils";

// API URL for fetching cart data
const url = "https://www.course-api.com/react-useReducer-cart-project";

// Create a React Context for global state management
const AppContext = createContext();

/**
 * Initial state of the cart
 * - `loading`: Boolean to indicate data fetch status.
 * - `cart`: A Map that stores cart items, initially empty.
 */
const initialState = {
  loading: false,
  // cart: new Map(cartItems.map((item) => [item.id, item])),
  cart: new Map(),
};

/**
 * AppProvider Component
 *
 * This component acts as a global state provider for the shopping cart.
 * It uses the `useReducer` hook to manage cart actions such as adding,
 * removing, increasing, and decreasing items.
 *
 * Features:
 * - Provides a global state for the cart using `useReducer` and `useContext`.
 * - Fetches initial cart data from an API on mount (`useEffect`).
 * - Calculates total cart items and total cost dynamically.
 * - Exposes functions to modify the cart (clear, remove, increase, decrease items).
 *
 *
 */
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Calculate total items and total cost from the cart
  const { totalCart, totalCost } = getTotals(state.cart);

  // Function to clear the entire cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  // Function to remove a specific item from the cart
  const removeItem = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  // Function to increase the quantity of an item in the cart
  const increaseItem = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };

  // Function to decrease the quantity of an item in the cart
  const decreaseItem = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  // Fetch cart data from an external API
  const fetchData = async () => {
    dispatch({ type: LOADING }); // Set loading state
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } }); // Populate cart with API data
  };

  // Fetch cart data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
        totalCart,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

/**
 * Custom hook to access global cart context
 * @returns {object} - The global cart state and actions.
 */
export const useGlobalContext = () => {
  return useContext(AppContext);
};
