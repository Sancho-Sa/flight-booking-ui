import React, { useState } from "react";
import Select from "react-select";

const DropdownComponent = ({ options, onSelectionChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSeletectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    onSelectionChange(selectedOption);
  };

  const defaultSelectedOption = options[0];

  return (
    <div>
      <Select
        defaultValue={defaultSelectedOption}
        onChange={handleSeletectChange}
        options={options}
      />
    </div>
  );
};

export default DropdownComponent;
