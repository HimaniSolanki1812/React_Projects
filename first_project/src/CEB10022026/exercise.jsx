// objective :- create a shopping cart component that manage items , quantities , and totals
// requirements :- 
//1. add item to cart (name,price quantity)
//2. Display cart items with individual totals 
//3. Update quantity for each item 
//4. Remove items from cart 
//5. calculate and display subtotal ,tax(10%), and total 
//6. clear entire cart 

//objective :- create a theme switcher that toggles betwee dark and light mark 
//Requirement :- 
//1. Toggle between light and dark mode 
//2. apply theme to component style.  
//3. Display current theme. 

import React, { useState } from "react";

function CartTheme() {
  // -------- THEME --------
  const [darkMode, setDarkMode] = useState(false);

  const themeStyles = {
    backgroundColor: darkMode ? "#222" : "#f5f5f5",
    color: darkMode ? "white" : "black",
    minHeight: "100vh",
    padding: "20px",
    textAlign: "center",
  };

  // -------- ITEMS --------
  const items = [
    { id: "item1", name: "Coffee", price: 2.5 },
    { id: "item2", name: "Tea", price: 2.0 },
    { id: "item3", name: "Croissant", price: 3.0 },
    { id: "item4", name: "Muffin", price: 4.5 },
  ];

  // -------- SELECT ITEM --------
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(items[0].price);

  // -------- CART --------
  const [cartItems, setCartItems] = useState([]);

  const handleSelectionChange = (id) => {
    const item = items.find((i) => i.id === id);
    setSelectedItem(item);
    setTotal(item.price * qty);
  };

  const handleQtyChange = (e) => {
    const value = Number(e.target.value);
    setQty(value);
    setTotal(selectedItem.price * value);
  };

  const addToCart = () => {
    const newItem = {
      ...selectedItem,
      qty,
      cart_id: Date.now(),
    };
    setCartItems((prev) => [...prev, newItem]);
  };

  const removeItem = (cart_id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.cart_id !== cart_id)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // -------- TOTALS --------
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const tax = subtotal * 0.1;
  const grandTotal = subtotal + tax;

  return (
    <div style={themeStyles}>
      <h2>Theme Switcher</h2>
      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>

      <hr />

      <h2>Select Item</h2>
      <select
        value={selectedItem.id}
        onChange={(e) => handleSelectionChange(e.target.value)}
      >
        {items.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name} - ${item.price}
          </option>
        ))}
      </select>

      <br /><br />

      <input
        type="number"
        min="1"
        value={qty}
        onChange={handleQtyChange}
      />

      <h3>Item Total: ${total.toFixed(2)}</h3>

      <button onClick={addToCart}>Add To Cart</button>

      <hr />

      <h2>Cart Items</h2>
      <table border="1" cellPadding="8" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.cart_id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.qty}</td>
              <td>${(item.price * item.qty).toFixed(2)}</td>
              <td>
                <button onClick={() => removeItem(item.cart_id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
      <h3>Tax (10%): ${tax.toFixed(2)}</h3>
      <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>

      <button
        onClick={clearCart}
        style={{
          marginTop: "10px",
          padding: "8px 15px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Clear Cart
      </button>
    </div>
  );
}

export default CartTheme;
