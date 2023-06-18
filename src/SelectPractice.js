import { useState } from "react";

function SelectPractice() {
  const countires = [
    {
      name: "India",
      value: "IN",
      cities: ["Delhi", "Mumbai"],
    },
    {
      name: "Pakistan",
      value: "PK",
      cities: ["Lahore", "Karachi"],
    },
    {
      name: "Bangladesh",
      value: "BS",
      cities: ["Dhaka", "Chittagong"],
    },
  ];
  const [country, setCountry] = useState(countires[0]);
  return (
    <div className="App">
      <h3> Select Practice</h3>
      <select
        onChange={(e) => {
          console.log(e.target.value);
          setCountry(countires[e.target.value]);
        }}
      >
        {countires.map((country, index) => (
          <option key={index} value={index}>
            {country.name}
          </option>
        ))}
      </select>
      <select>
        {country?.cities?.map((city, index) => (
          <option key={index} value={index}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectPractice;
