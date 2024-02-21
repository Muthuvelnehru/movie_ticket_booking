// SeatMap.js
import "./MovieSeatSelection.css";
import React, { useState } from "react";
import MovieSeatSelection from "./MovieSeatSelection";

let price;
let Array1;
const SeatMap = () => {
  const rows = ["A", "B", "C", "D", "E"];
  const seatsPerRow = 8;
  const seatPrice = 100; // Example seat price in dollars

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState(["C3"]); // Example pre-booked seats

  const handleSeatClick = (seatId) => {
    if (!bookedSeats.includes(seatId)) {
      if (selectedSeats.includes(seatId)) {
        setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
      } else {
        setSelectedSeats([...selectedSeats, seatId]);
      }
    }
  };

  const calculateTotalPrice = () => {
    return selectedSeats.length * seatPrice;
  };

  const handleBookSeats = () => {
    // Check if the selected seats are not already booked before proceeding
    const newBookedSeats = selectedSeats.filter(
      (seat) => !bookedSeats.includes(seat)
    );

    // Perform the booking actions (e.g., send a request to your server, update the database)
    console.log("Booking the following seats:", newBookedSeats);
    Array1 = newBookedSeats.join();
    // Update the state to reflect the newly booked seats
    setBookedSeats([...bookedSeats, ...newBookedSeats]);

    // Calculate the total price
    const totalPrice = calculateTotalPrice();
    console.log("Total Price:", totalPrice);
    price = "₹ " + totalPrice;
    // Clear the selected seats
    setSelectedSeats([]);
  };

  return (
    <div className="seat-map">
      {rows.map((row) => (
        <div key={row} className="seat-row">
          {Array.from({ length: seatsPerRow }, (_, index) => {
            const seatNumber = index + 1;
            const seatId = `${row}${seatNumber}`;
            const isSelected = selectedSeats.includes(seatId);
            const isBooked = bookedSeats.includes(seatId);

            return (
              <MovieSeatSelection
                key={seatId}
                id={seatId}
                selected={isSelected}
                booked={isBooked}
                onClick={handleSeatClick}
              />
            );
          })}
        </div>
      ))}
      <div className="booking-actions">
        <button onClick={handleBookSeats} disabled={selectedSeats.length === 0}>
          Book Selected Seats
        </button>
      </div>
      <Ticket />
      </div>
   
  );
};

export default SeatMap;

function Ticket() {
  return (
    <>
      <div className="container bgcontainer  m-5 p-4 text-center align-items">
        <div className=" row">
          <div className="col-12 col-md-6">
            <h4 style={{ color: "white"  }}>Seats Booked</h4>
            <p style={{ color: "#00ffff" ,overflow:"scroll"}}>{Array1}</p>
          </div>
          <div className="col-12 col-md-6">
            <h4 style={{ color: "white" }}>Price</h4>
            <h3 style={{ color: "#00ffff" }}>{price}</h3>
          </div>

        </div>
        <div className="text-center ">
                <button className="button" >
                    Proceed
                </button>
              </div>
      </div>
      
    </>
  );
}
