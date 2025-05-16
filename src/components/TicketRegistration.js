'use client';

import React, { useState } from 'react';
import './TicketRegistration.css';

export default function TicketRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ticketType: 'General',
    quantity: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ticket Registered:', formData);
    alert('Thank you for registering!');
    // TODO: integrate with API/backend
  };

  return (
    <div className="ticket-form-container">
      <h2 className="ticket-form-title">Register for Tickets</h2>
      <form onSubmit={handleSubmit} className="ticket-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Ticket Type</label>
          <select
            name="ticketType"
            value={formData.ticketType}
            onChange={handleChange}
          >
            <option value="General">General</option>
            <option value="VIP">Elite</option>
            <option value="Student">VIP</option>
          </select>
        </div>

        <div className="form-group">
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-button">Register Now</button>
      </form>
    </div>
  );
}
