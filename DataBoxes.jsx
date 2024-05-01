import React, { useState } from 'react';
import axios from 'axios';

const DataBoxes = () => {
  // State for data counts
  const [ticketsToday, setTicketsToday] = useState(3); // Initial tickets entered today
  const [totalTickets, setTotalTickets] = useState(5); // Initial total entered tickets
  const [ticketResponses, setTicketResponses] = useState(1); // Initial responses of tickets

  const [newTicketMessage, setNewTicketMessage] = useState(''); // State for new ticket message

  // Event handler for input change
  const handleInputChange = (e) => {
    setNewTicketMessage(e.target.value); // Update the message state
  };

  // Event handler for submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      // Simulate a POST request to submit a new ticket
      await axios.post('http://localhost:3000/api/ticket', { message: newTicketMessage });

      // Update the counts on successful submission
      setTicketsToday(ticketsToday + 1); // Increment today's tickets
      setTotalTickets(totalTickets + 1); // Increment total tickets

      setNewTicketMessage(''); // Clear the input field after submission
    } catch (error) {
      console.error('Error submitting new ticket:', error);
    }
  };

  return (
    <div className='databoxes'>
        <div className="databox">
            <span className='text'>Tickets I entered today</span>
            <span className='statistics'>{ticketsToday}</span> {/* Display tickets today */}
        </div>
        <div className="databox">
            <span className='text'>Total entered tickets</span>
            <span className='statistics'>{totalTickets}</span> {/* Display total tickets */}
        </div>
        <div className="databox">
            <span className='text'>Responses of tickets</span>
            <span className='statistics'>{ticketResponses}</span> {/* Display ticket responses */}
        </div>

        {/* Form with input box for new ticket and input submit button */}
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="input-box"
              placeholder="Write your concern here ..."
              value={newTicketMessage}
              onChange={handleInputChange} // Event handler for text input
            />
            <input type="submit" value="Submit" className="submit-button" /> {/* Input submit button */}
        </form>
    </div>
  );
};

export default DataBoxes;
