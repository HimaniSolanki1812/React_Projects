//create a registratino form with following details 
//1. Name (Text)
//2. Email (Text)
//3. Password (Text,Regular Expression )
//4. Confirm Password (Text  ,Regular Expression)
//5. Gender (Redio Button)
//6. Country (Dropdown)
//7. Terms and conditions (Checkbox)
//8. Color Picker (Color)
//9. DOB(Data Picker)
//10. Submit Button 

import React, { useState } from "react";
import "./RegistrationForm.css";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    country: "",
    terms: false,
    color: "#000000",
    dob: ""
  });

  const [errors, setErrors] = useState({});

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  }

  function validateForm() {
    let err = {};

    if (formData.name.trim() === "") err.name = "Name is required";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      err.email = "Enter valid email";

    if (!passwordRegex.test(formData.password))
      err.password =
        "Password must be 8+ chars with upper, lower, number, special char";

    if (formData.confirmPassword !== formData.password)
      err.confirmPassword = "Passwords do not match";

    if (formData.gender === "") err.gender = "Select gender";

    if (formData.country === "") err.country = "Select country";

    if (!formData.terms) err.terms = "Accept terms & conditions";

    if (!formData.color) err.color = "Select a color";

    if (formData.dob === "") err.dob = "Select date of birth";

    setErrors(err);
    return Object.keys(err).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      alert("Form Submitted Successfully!");
      console.log(formData);
    }
  }

  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <span>{errors.name}</span><br />

        <label>Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <span>{errors.email}</span><br />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <span>{errors.password}</span><br />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <span>{errors.confirmPassword}</span><br />

        <label>Gender</label>
        <div className="radio-group">
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          /> Male

          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          /> Female
        </div>
        <span>{errors.gender}</span><br />

        <label>Country</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        <span>{errors.country}</span><br />

        <div className="checkbox">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          Accept Terms & Conditions
        </div>
        <span>{errors.terms}</span><br />

        <label>Color Picker</label>
          <div
            className="color-box"
            style={{ backgroundColor: formData.color }}
          >
            <input
              type="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
            />
          </div>

        {/* DOB */}
        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
        <span>{errors.dob}</span><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

