import React, { useState } from "react";

export default function Hook2Example() {
    const [user, setUser] = useState({
        name: "Guest",
        age: 25,
        ce: true,
        city: "Rajkot",
    });

    const handleNameChange = (e) => {
        setUser({ ...user, name: e.target.value });
    };

    const handleAgeChange = (e) => {
        setUser({ ...user, age: e.target.value });
    };

    const handleCityChange = (e) => {
        setUser({ ...user, city: e.target.value });
    };

    const handleCheckboxChange = () => {
        setUser({ ...user, ce: !user.ce });
    };

    return (
        <>
            <h2>User Details</h2>

            <input
                type="text"
                placeholder="Name"
                value={user.name}
                onChange={handleNameChange}
            />
            <br /><br />

            <input
                type="number"
                placeholder="Age"
                value={user.age}
                onChange={handleAgeChange}
            />
            <br /><br />

            <input
                type="text"
                placeholder="City"
                value={user.city}
                onChange={handleCityChange}
            />
            <br /><br />

            <label>
                <input
                    type="checkbox"
                    checked={user.ce}
                    onChange={handleCheckboxChange}
                />
                CE Student
            </label>

            <hr />

            <h3>Preview</h3>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>City: {user.city}</p>
            <p>CE: {user.ce ? "Yes" : "No"}</p>
        </>
    );
}
