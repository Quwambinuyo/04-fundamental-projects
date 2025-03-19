import CartItem from "./CartItem";
import { useGlobalContext } from "./context";
import cartItems from "./data";

/**
 * CartContainer Component
 *
 * This component displays the shopping cart with all selected items.
 * It retrieves the cart data, total cost, and the function to clear the cart
 * from the global context.
 *
 * Features:
 * - If the cart is empty, it displays a message indicating so.
 * - If the cart contains items, it maps through the cart and renders `CartItem` components.
 * - Displays the total cost of the items in the cart.
 * - Includes a "Clear Cart" button to remove all items.
 */

const CartContainer = () => {
  // Extracting cart state, clearCart function, and totalCost from global context
  const { cart, clearCart, totalCost } = useGlobalContext();

  // Convert cart (Map object) into an array for iteration
  const cartArray = Array.from(cart.entries());

  // Display a message if the cart is empty
  if (cartArray.length === 0) {
    return (
      <section className="cart">
        {/* Cart header */}
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      {/* Cart header */}
      <header>
        <h2>Your Bag</h2>
      </header>

      {/* Display cart items */}
      <div>
        {cartArray.map((cartItem) => {
          const [id, item] = cartItem;
          return <CartItem key={id} {...item} />;
        })}
      </div>

      {/* Cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            Total: <span>${totalCost.toFixed(2)}</span>
          </h5>
        </div>
        {/* Button to clear the cart */}
        <button className="btn btn-hipster" onClick={clearCart}>
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
