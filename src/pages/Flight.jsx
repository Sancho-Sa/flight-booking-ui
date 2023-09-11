import React, { useEffect, useState } from "react";
import { deleteFlight, getAllFlights } from "../services/FlightService";
import { useNavigate } from "react-router-dom";

const Flight = () => {
  const [flights, setFlights] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    flightList();
  }, []);

  const flightList = () => {
    getAllFlights()
      .then((response) => {
        setFlights(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addNewFlight = () => {
    navigate("/create-flight");
  };

  const updateFlight = (id) => {
    navigate(`/update-flight/${id}`);
  };

  const removeFlight = (id) => {
    deleteFlight(id)
      .then((respones) => {
        flightList();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>List of Flights</h2>
      <button onClick={addNewFlight}>Create New Flight</button>
      <div>
        <table>
          <thead>
            <tr>
              <th>Departure Airport</th>
              <th>Arrival Airport</th>
              <th>Departure Date</th>
              <th>Cost</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight) => (
              <tr key={flight.id}>
                <td>{flight.departureAirport}</td>
                <td>{flight.arrivalAirport}</td>
                <td>{flight.departureDate}</td>
                <td>{flight.cost}</td>
                <td>
                  <button onClick={() => updateFlight(flight.id)}>
                    Update
                  </button>
                  <button
                    onClick={() => removeFlight(flight.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Flight;
