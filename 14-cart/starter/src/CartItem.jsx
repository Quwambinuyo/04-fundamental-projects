import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "./context";

/**
 * CartItem Component
 *
 * This component represents a single item in the shopping cart.
 * It displays the product image, title, price, and quantity,
 * along with controls to increase, decrease, or remove the item.
 *
 * Props:
 * - id (string): Unique identifier for the item.
 * - img (string): URL of the product image.
 * - title (string): Name of the product.
 * - price (number): Price of a single unit of the product.
 * - amount (number): Quantity of the item in the cart.
 *
 * Features:
 * - Displays product details (image, title, price, and quantity).
 * - Allows increasing or decreasing the item quantity.
 * - Removes the item from the cart when the remove button is clicked.
 */

const CartItem = ({ id, img, title, price, amount }) => {
  // Extracting functions from global context to manage cart actions
  const { removeItem, increaseItem, decreaseItem } = useGlobalContext();

  return (
    <article className="cart-item">
      {/* Product image */}
      <img src={img} alt={title} />

      {/* Product details */}
      <div>
        <h5>{title}</h5>
        <span className="item-price">${price}</span>

        {/* Remove button */}
        <button className="remove-btn" onClick={() => removeItem(id)}>
          Remove
        </button>
      </div>

      {/* Quantity controls */}
      <div>
        {/* Increase amount */}
        <button className="amount-btn" onClick={() => increaseItem(id)}>
          <FaChevronUp className="amount-icon" />
        </button>

        {/* Display current amount */}
        <span className="amount">{amount}</span>

        {/* Decrease amount */}
        <button className="amount-btn" onClick={() => decreaseItem(id)}>
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
