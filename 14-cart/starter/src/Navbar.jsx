import { FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from "./context";

/**
 * Navbar Component
 *
 * This component displays the navigation bar with a cart icon and the total
 * number of items in the shopping cart.
 *
 * Features:
 * - Displays the application title ("useReducer").
 * - Shows a shopping cart icon.
 * - Dynamically updates and displays the total number of items in the cart.
 *
 * Uses:
 * - `useGlobalContext` to access the `totalCart` value from global state.
 */

const Navbar = () => {
  // Extract total number of cart items from global context
  const { totalCart } = useGlobalContext();

  return (
    <nav>
      <div className="nav-center">
        {/* Application title */}
        <h4>useReducer</h4>

        {/* Cart icon with item count */}
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{totalCart}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
