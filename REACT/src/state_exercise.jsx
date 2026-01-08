// exercise for state management in React

// create class based component
// that will allow user to register
// 1. name (text)
// 2. email (email)
// 3. password
// 4. confirm password
// 5. gender (radio buttons)
// 6. country ( dropdown with at least 5 countries )
// 7. terms and conditions ( checkbox )
//8. COLOR Picker
//9. Date and time 
// on form submission , validate the inputs and display
// an alert with entered details (except password fields)

import React, { Component } from 'react';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
      country: '',
      terms: false,
      color: '#000000',
      dateTime: '',
      errors: {}
    };

  }



  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

    handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

    handleConfirmPasswordChange = (e) => {
    this.setState({ confirmPassword: e.target.value });
  };

    handleGenderChange = (e) => {
    this.setState({ gender: e.target.value });
  };

    handleCountryChange = (e) => {
    this.setState({ country: e.target.value });
  };

    handleTermsChange = (e) => {
    this.setState({ terms: e.target.checked });
  };

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  validate = () => {
    const errors = {};
    const { name, email, password, confirmPassword, gender, country, terms } = this.state;

    if (!name.trim()) errors.name = 'Name is required';
    if (!email) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Email is invalid';
    if (!password) errors.password = 'Password is required';
    else if (password.length < 6) errors.password = 'Password must be at least 6 characters';
    if (!confirmPassword) errors.confirmPassword = 'Confirm password is required';
    else if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match';
    if (!gender) errors.gender = 'Please select a gender';
    if (!country) errors.country = 'Please select a country';
    if (!terms) errors.terms = 'You must accept the terms';

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!this.validate()) return;

    const { name, email, gender, country, terms, color, dateTime } = this.state;
    alert(`Registration successful!\n\nName: ${name}\nEmail: ${email}\nGender: ${gender}\nCountry: ${country}\nTerms accepted: ${terms ? 'Yes' : 'No'}\nColor: ${color}\nDate: ${dateTime}`);
    this.setState({ name: '', email: '', password: '', confirmPassword: '', gender: '', country: '', terms: false, color: '#000000', dateTime: '', errors: {} });
  };

  render() {
    const { name, email, password, confirmPassword, gender, country, terms, color, dateTime, errors } = this.state;
    const countries = ['United States', 'Canada', 'United Kingdom', 'Australia', 'India'];

    return (
      <div className="register-card">
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-field">
            <label>Name</label>
            <input type="text" placeholder="Name" name="name" value={name} onChange={this.handleChange} className="input" style={{ border: errors.name ? '1px solid #e02424' : undefined }} />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>

          <div className="form-field">
            <label>Email</label>
            <input type="email" placeholder="Email" name="email" value={email} onChange={this.handleChange} className="input" style={{ border: errors.email ? '1px solid #e02424' : undefined }} />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Password</label>
              <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange} className="input" style={{ border: errors.password ? '1px solid #e02424' : undefined }} />
              {errors.password && <div className="error">{errors.password}</div>}
            </div>

            <div className="form-field">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} className="input" style={{ border: errors.confirmPassword ? '1px solid #e02424' : undefined }} />
              {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
            </div>
          </div>

          <div className="form-field">
            <label>Gender</label>
            <div>
              <label style={{ marginRight: 12 }}><input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={this.handleChange} /> <span style={{ marginLeft: 6 }}>Male</span></label>
              <label style={{ marginRight: 12 }}><input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={this.handleChange} /> <span style={{ marginLeft: 6 }}>Female</span></label>
              <label><input type="radio" name="gender" value="other" checked={gender === 'other'} onChange={this.handleChange} /> <span style={{ marginLeft: 6 }}>Other</span></label>
            </div>
            {errors.gender && <div className="error">{errors.gender}</div>}
          </div>

          <div className="form-field">
            <label>Country</label>
            <select name="country" value={country} onChange={this.handleChange} style={{ border: errors.country ? '1px solid #e02424' : undefined }}>
              <option value="">-- Select country --</option>
              {countries.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            {errors.country && <div className="error">{errors.country}</div>}
          </div>

          <div className="form-field">
            <label className="checkbox-label"><input type="checkbox" name="terms" checked={terms} onChange={this.handleChange} /> <span>I accept terms and conditions</span></label>
            {errors.terms && <div className="error">{errors.terms}</div>}
          </div>

          <div className="form-field">
            <label>Favorite color</label>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <input type="color" name="color" value={color} onChange={this.handleChange} style={{ width: 64, height: 40, border: 'none', background: 'transparent' }} />
              <div className="color-swatch" style={{ background: color }}></div>
              <div>{color}</div>
            </div>
          </div>

          <div className="form-field">
            <label>Date & time</label>
            <input type="datetime-local" name="dateTime" value={dateTime} onChange={this.handleChange} />
          </div>

          <div style={{ marginTop: 6 }}>
            <button className="register-btn" type="submit">Register</button>
          </div>
        </form>

        <div className="preview">
          <p>{name}</p>
          <p>{email}</p>
          <p>{gender}</p>
          <p>{country}</p>
          <p>{terms ? 'Yes' : 'No'}</p>
          <p><span className="color-swatch" style={{ background: color }}></span> {color}</p>
          <p>{dateTime}</p>
        </div>
      </div>
    );
  }

}
export default RegistrationForm;



