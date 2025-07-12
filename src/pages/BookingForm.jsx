import React, { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    alert("Booking submitted successfully!");
    // You can connect to backend API here
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Book the Hall</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Booking Date</label>
          <input
            type="date"
            name="date"
            required
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Number of Guests</label>
          <input
            type="number"
            name="guests"
            required
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.guests}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Message / Notes</label>
          <textarea
            name="message"
            rows="3"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
