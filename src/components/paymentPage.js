

  /*

  return (
    <div className="main_div">
      <div className="logos">
        <div className="flex_payment">Payment Method</div>
        <div className="all_logos">
          <img src="Mastercard_logo.jpg" alt="" />
          <img src="visa.webp" alt="" />
          <img src="american.webp" alt="" />
          <img src="download.png" alt="" />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="credit_details">
          <div className="table">
            <label htmlFor="name">Name on Card </label>
            <input type="text" name="name" id="name" placeholder="John Doe" onChange={handleInputChange} />
          </div>
          <div className="table">
            <label htmlFor="card">Card Number </label>
            <input type="text" name="cardNumber" id="card" placeholder="0000 0000 0000 0000" onChange={handleInputChange} />
          </div>
          <div className="table">
            <label>Card Expiration </label>
            <select className="month_year" id="month-select" name="month" onChange={handleInputChange}>
              {months.map((month, index) => (
                <option key={index} value={index + 1}>{month}</option>
              ))}
            </select>
            <select className="month_year" id="year-select" name="year" onChange={handleInputChange}>
              {years.map((year, index) => (
                <option key={index} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <div className="table">
            <label htmlFor="code"> Card Security Code </label>
            <input type="text" name="code" id="code" placeholder="Code " onChange={handleInputChange} />
          </div>
        </div>
        <div className="credit_details">
          <div className="table">
            <label htmlFor="country">Country </label>
            <input type="text" name="country" id="country" placeholder="Country" onChange={handleInputChange} />
            <select style={{ backgroundColor: '#4c4c4c', border: 'none', outline: 'none', color: '#FFFFFF' }} id="country-select" name="country" onChange={handleInputChange}>
              <option value="" disabled selected></option>
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div className="table">
            <label htmlFor="address">Address </label>
            <input type="text" name="address" id="address" placeholder="Address" onChange={handleInputChange} />
          </div>
          <div className="table">
            <label htmlFor="city">City </label>
            <input type="text" name="city" id="city" placeholder="City" onChange={handleInputChange} />
          </div>
          <div className="table">
            <label htmlFor="state">State </label>
            <input type="text" name="state" id="state" placeholder="State" onChange={handleInputChange} />
          </div>
          <div className="table">
            <label htmlFor="zip">Zip Code </label>
            <input type="text" name="zip" id="zip" placeholder="Zip Code" onChange={handleInputChange} />
          </div>
        </div>
        <div className="credit_details">
          <div className="table">
            <label htmlFor="email">Email </label>
            <input type="text" name="email" id="email" placeholder="John Doe" onChange={handleInputChange} />
          </div>
        </div>
        <div className="btn">
          <button>Pay</button>
        </div>
      </form>
    </div>
  );
};

export default CreditCardForm;*/


import React, { useState, useEffect } from 'react';
import mastercardLogo from '../paymentpage/Mastercard_logo.jpg';
import visaLogo from '../paymentpage/visa.webp';
import americanLogo from '../paymentpage/american.webp';
import discoverLogo from '../paymentpage/Discover-logo.png';

export const CreditCardForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    month: '',
    year: '',
    code: '',
    country: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    email: ''
  });

  useEffect(() => {
    // Populate months and years
    // Assuming this is handled by your existing logic
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="credit-card-form-container" style={{ position: 'absolute', top: '20%', left: '10%', width: '80%', maxWidth: '400px' }}>
      <div className="payment-method-logos">
        <img src={mastercardLogo} alt="Mastercard" />
        <img src={visaLogo} alt="Visa" />
        <img src={americanLogo} alt="American Express" />
        <img src={discoverLogo} alt="Discover" />
      </div>
      <form onSubmit={handleSubmit} className="credit-card-form">
        <div className="form-section">
          <label htmlFor="name">Name on Card</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div className="form-section">
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} />
        </div>
        <div className="form-section">
          <label htmlFor="month">Card Expiration Month</label>
          <select id="month" name="month" value={formData.month} onChange={handleInputChange}>
            {/* Month options here */}
          </select>
          <label htmlFor="year">Year</label>
          <select id="year" name="year" value={formData.year} onChange={handleInputChange}>
            {/* Year options here */}
          </select>
        </div>
        <div className="form-section">
          <label htmlFor="code">Card Security Code</label>
          <input type="text" id="code" name="code" value={formData.code} onChange={handleInputChange} />
        </div>
        {/* ... The rest of your form fields ... */}
        <div className="form-section">
          <button type="submit" className="submit-btn">Pay</button>
        </div>
      </form>
    </div>
  );
};

export default CreditCardForm;