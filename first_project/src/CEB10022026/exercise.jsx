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

const Exercise = () => {
  const [darkMode, setDarkMode] = useState(false);

  const themeStyles = {
    backgroundColor: darkMode ? "#222" : "#f5f5f5",
    color: darkMode ? "white" : "black",
    minHeight: "100vh",
    padding: "20px",
    textAlign: "center",
  };

  // -------- CART --------
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  // Store edited values for each row
  const [editedItem, setEditedItem] = useState({});

  // -------- ADD ITEM --------
  const addItem = () => {
    if (!name || !price || !quantity) {
      alert("Fill all fields");
      return;
    }

    setCart([
      ...cart,
      {
        name,
        price: parseFloat(price),
        quantity: parseInt(quantity),
      },
    ]);

    setName("");
    setPrice("");
    setQuantity("");
  };

  // -------- HANDLE EDIT CHANGE --------
  const handleEditChange = (index, field, value) => {
    setEditedItem({
      ...editedItem,
      [index]: {
        ...editedItem[index],
        [field]: value,
      },
    });
  };

  // -------- UPDATE ITEM --------
  const updateItem = (index) => {
    const updated = editedItem[index];

    if (!updated) {
      alert("No changes made");
      return;
    }

    setCart((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              name: updated.name || item.name,
              price: parseFloat(updated.price) || item.price,
              quantity: parseInt(updated.quantity) || item.quantity,
            }
          : item
      )
    );
  };

  // -------- REMOVE --------
  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };
  // -------- CLEAR CART --------
  const clearCart = () => {
    setCart([]);
    setEditedItem({});
  };

  // -------- TOTALS --------
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div style={themeStyles}>
      {/* THEME SWITCHER */}
      <h2>Theme Switcher</h2>
      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
      <h3>Current Theme: {darkMode ? "Dark" : "Light"}</h3>

      <hr />

      {/* ADD ITEM */}
      <h2>Shopping Cart</h2>
      <input
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>

      {/* TABLE */}
      <table border="1" cellPadding="8" style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  defaultValue={item.name}
                  onChange={(e) =>
                    handleEditChange(index, "name", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  defaultValue={item.price}
                  onChange={(e) =>
                    handleEditChange(index, "price", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  defaultValue={item.quantity}
                  onChange={(e) =>
                    handleEditChange(index, "quantity", e.target.value)
                  }
                />
              </td>
              <td>{item.price * item.quantity}</td>
              <td>
                <button onClick={() => updateItem(index)}>Update</button>
                <button
                  onClick={() => removeItem(index)}
                  style={{ marginLeft: "8px" }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* TOTALS */}
      <h3>Subtotal: {subtotal.toFixed(2)}</h3>
      <h3>Tax (10%): {tax.toFixed(2)}</h3>
      <h2>Total: {total.toFixed(2)}</h2>

            {/* -------- CLEAR CART -------- */}
      <button
        onClick={clearCart}
        style={{
          marginTop: "15px",
          padding: "8px 15px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Clear Entire Cart
      </button>

    </div>
    
  );
};

export default Exercise;
