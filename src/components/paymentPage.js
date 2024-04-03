

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
import {loadStripe} from '@stripe/stripe-js';


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

  const makePayment = async ()=> {
    const stripe = await loadStripe ("pk_test_51OzLF8020fOUxg40TACR890Wmv5XOSnfOWsoRJhW9fYZdxvhFw6B0sk4SIRNUD0MD7KF1mJRbTey18KcA2NH3XSg005S9xe7lM");
  
    const body = {
      // purchase path here
    }
    const headers = {
        "Content-Type": "application/json"
    }
      const response = await fetch ("http://localhost:7000/api/create-checkout-session",{
      method:"POST",
      headers:headers,
      
    })

    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id
    })

    if(result.error){
      console.log(result.error);
    }
}

  return (
    <div className="main-content" style={{ padding: '60px 0', background: '#f7f7f7', minHeight: '100vh' }}> {/* Adjust the top padding to push the content below your navbar */}
      <div className="credit-card-form-container" style={{ maxWidth: '500px', margin: '0 auto', background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
        <div className="payment-method-logos" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          {/* Adjust your image paths as necessary */}
          <img src={mastercardLogo} alt="Mastercard" style={{ maxWidth: '50px' }} />
          <img src={visaLogo} alt="Visa" style={{ maxWidth: '50px' }} />
          <img src={americanLogo} alt="American Express" style={{ maxWidth: '50px' }} />
          <img src={discoverLogo} alt="Discover" style={{ maxWidth: '50px' }} />
        </div>
        
        <form onSubmit={handleSubmit} className="credit-card-form" style={{ color: '#333', background: '#EEE', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
  <div className="form-section" style={{ marginBottom: '20px' }}>
    <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name on Card</label>
    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
  </div>

  <div className="form-section" style={{ marginBottom: '20px' }}>
    <label htmlFor="cardNumber" style={{ display: 'block', marginBottom: '5px' }}>Card Number</label>
    <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} style={{ width: '100%', padding: '10px' }} />
  </div>

  <div className="form-section" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
    <div style={{ width: '48%' }}>
      <label htmlFor="month" style={{ display: 'block', marginBottom: '5px' }}>Card Expiration Month</label>
      <select id="month" name="month" value={formData.month} onChange={handleInputChange} style={{ width: '100%', padding: '10px' }}>
        {/* Populate with month options */}
      </select>
    </div>
    <div style={{ width: '48%' }}>
      <label htmlFor="year" style={{ display: 'block', marginBottom: '5px' }}>Year</label>
      <select id="year" name="year" value={formData.year} onChange={handleInputChange} style={{ width: '100%', padding: '10px' }}>
        {/* Populate with year options */}
      </select>
    </div>
  </div>

  <div className="form-section" style={{ marginBottom: '20px' }}>
    <label htmlFor="code" style={{ display: 'block', marginBottom: '5px' }}>Card Security Code</label>
    <input type="text" id="code" name="code" value={formData.code} onChange={handleInputChange} style={{ width: '100%', padding: '10px' }} />
  </div>

  {/* Add billing address fields */}
  <div className="form-section" style={{ marginBottom: '20px' }}>
    {/* ... */}
  </div>
  
  {/* Contact Information Section */}
  <div className="form-section" style={{ marginBottom: '20px' }}>
    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} style={{ width: '100%', padding: '10px' }} />
  </div>

  {/* Submit button */}
  <div className="form-section" style={{ marginTop: '20px' }}>
    <button type="submit" className="submit-btn" style={{ width: '100%', padding: '15px 0', background: 'red', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
      Pay
    </button>
  </div>
</form>
      </div>
    </div>
  );
};

export default CreditCardForm;




