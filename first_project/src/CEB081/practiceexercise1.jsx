//create a react class based component
//that will contain a drop down with items
//each item will have a value /price and label
//beside the dropdown,display+button,quantity and -button
//when user click + button,quantity will increance by 1
//when user click - button,quantity will decrease by 1
//below the dropdown. display total price based on
//selected item price and quantity
//if quantity is 0 then - button should be displayed
//if quantity is more then 10 , +button should be disabled
//initial quantity should be 1




import React, { Component } from "react";

class PracticeExercise1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 1, label: "Item A", price: 100 },
                { id: 2, label: "Item B", price: 150 },
                { id: 3, label: "Item C", price: 200 },
            ],
            selectedItemId: 1,
            quantity: 1, // initial quantity
        };
    }

    handleSelectChange = (e) => {
        this.setState({ selectedItemId: Number(e.target.value) });
    };

    increment = () => {
        this.setState((prev) => ({
            // don't allow quantity to go above 10
            quantity: Math.min(prev.quantity + 1, 10),
        }));
    };

    decrement = () => {
        this.setState((prev) => ({
            quantity: Math.max(prev.quantity - 1, 0),
        }));
    };

    render() {
        const { items, selectedItemId, quantity } = this.state;
        const selected = items.find((it) => it.id === selectedItemId) || items[0];
        const total = selected.price * quantity;

        return (
            <div>
                <label>
                    Select item: &nbsp;
                    <select value={selectedItemId} onChange={this.handleSelectChange}>
                        {items.map((it) => (
                            <option key={it.id} value={it.id}>
                                {it.label} - {it.price}
                            </option>
                        ))}
                    </select>
                </label>

                <div style={{ display: "inline-block", marginLeft: 16 }}>
                    <button
                        type="button"
                        onClick={this.increment}
                        disabled={quantity >= 10} // + disabled at 10
                    >
                        +
                    </button>

                    <span style={{ margin: "0 8px" }}>{quantity}</span>

                    {/* hide the - button when quantity is 0 (user chose option 2) */}
                    {quantity > 0 && (
                        <button type="button" onClick={this.decrement}>
                            -
                        </button>
                    )}
                </div>

                <div style={{ marginTop: 12 }}>
                    <strong>Total: </strong> {total}
                </div>
            </div>
        );
    }
}

export default PracticeExercise1;
