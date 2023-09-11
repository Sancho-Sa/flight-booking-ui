import React, { useState } from "react";
import DropdownComponent from "../components/DropdownComponent";

const Book = () => {
  const [selectedPassenger, setSelectedPassenger] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [cost, setCost] = useState("");

  const handlePassengerSelection = (selectedOption) => {
    setSelectedPassenger(selectedOption ? selectedOption.value : null);
  };

  const handleClassSelection = (selectedOption) => {
    setSelectedClass(selectedOption ? selectedOption.value : null);
  };

  const passengerOptions = [
    { value: "Adult", label: "Adult" },
    { value: "Children", label: "Children" },
  ];

  const classOptions = [
    { value: "Economy Class", label: "Economy Class" },
    { value: "Premium Economy", label: "Premium Economy" },
    { value: "Business Class", label: "Business Class" },
    { value: "First Class", label: "First Class" },
  ];

  const handleCost = (event) => {};

  return (
    <>
      <h2>Book a flight</h2>
      <form>
        <div>
          <DropdownComponent
            options={passengerOptions}
            onSelectionChange={handlePassengerSelection}
          />
        </div>
        <div>
          <DropdownComponent
            options={classOptions}
            onSelectionChange={handleClassSelection}
          />
        </div>
        <div>
          <input value={cost} onChange={handleCost} type="number" id="cost" />
          <br />
          <label htmlFor="cost">Cost</label>
        </div>
        <div>
          <button>Book a flight</button>
        </div>
      </form>
    </>
  );
};

export default Book;
