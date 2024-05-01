import React, { useState } from 'react';
import axios from 'axios';

const TicketForm = () => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async () => {
    if (message.trim() === '') {
      console.warn('Please enter a message before submitting');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/ticket', { message });
      console.log('Success:', response.data);
      setMessage(''); // Clear the input after successful submission
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h2>Submit a Ticket</h2>
      <input
        type="text"
        value={message}
        onChange={handleChange} // Event handler for input box
        placeholder="Write your message..."
      />xw
      <button onClick={handleSubmit}>Submit</button> {/* Event handler for button */}
    </div>
  );
};

export default TicketForm;
