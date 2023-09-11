import React, { useEffect, useState } from "react";
import {
  createFlight,
  getFlight,
  updateFlight,
} from "../services/FlightService";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const CreateFlight = () => {
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [cost, setCost] = useState("");

  const formattedDate = moment(departureDate).format("yyyy-MM-DD");

  const navigate = useNavigate();
  const { id } = useParams();

  const createOrUpdateFlight = (event) => {
    event.preventDefault();

    const flight = { departureAirport, arrivalAirport, date, cost };

    if (id) {
      updateFlight(id, flight)
        .then((response) => {
          navigate("/flight");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      createFlight(flight)
        .then((response) => {
          console.log(response.data);
          navigate("/flight");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const pageTitle = () => {
    if (id) {
      return <h2>Update Flight</h2>;
    } else {
      return <h2>New Flight</h2>;
    }
  };

  useEffect(() => {
    if (id) {
      getFlight(id)
        .then((response) => {
          console.log(response.data);
          setDepartureAirport(response.data.departureAirport);
          setArrivalAirport(response.data.arrivalAirport);
          setDate(response.data.date);
          setCost(response.data.cost);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  return (
    <>
      {pageTitle()}
      <form>
        <div>
          <input
            type="text"
            name="departureAirport"
            value={departureAirport}
            onChange={(event) => setDepartureAirport(event.target.value)}
          />
          <br />
          <label>Departure Airport</label>
        </div>
        <div>
          <input
            type="text"
            name="arrivalAirport"
            value={arrivalAirport}
            onChange={(event) => setArrivalAirport(event.target.value)}
          />
          <br />
          <label>Arrival Airport</label>
        </div>
        <div>
          <input
            type="date"
            name="departureDate"
            value={formattedDate}
            onChange={(event) => setDepartureDate(event.target.value)}
          />
          <br />
          <label>Departure Date</label>
        </div>
        <div>
          <input
            type="number"
            name="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
          <br />
          <label>Price</label>
        </div>
        <div>
          <button onClick={(event) => createOrUpdateFlight(event)}>
            Create Flight
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateFlight;
