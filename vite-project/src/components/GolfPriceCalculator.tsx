import React, { useState } from "react";
import "../components/styles/GolfPriceCalculator.module.css";

const GolfPriceCalculator: React.FC = () => {
  // State for selected options
  const [day, setDay] = useState<"weekend" | "weekday">("weekend");
  const [holes, setHoles] = useState<"9" | "18">("9");
  const [transportation, setTransportation] = useState<
    "golf-cart" | "single-rider-cart" | "pull-cart" | "walking"
  >("golf-cart");
  const [adultPlayers, setAdultPlayers] = useState<number>(0);
  const [seniorPlayers, setSeniorPlayers] = useState<number>(0);
  const [juniorPlayers, setJuniorPlayers] = useState<number>(0);

  // Price calculation function
  const calculatePrice = () => {
    // Base price
    let price = 0;

    // Pricing based on day, holes, and player type
    if (day === "weekend") {
      if (holes === "9") {
        price += adultPlayers * 17 + seniorPlayers * 14 + juniorPlayers * 14;
      } else {
        price += adultPlayers * 25 + seniorPlayers * 22 + juniorPlayers * 22;
      }
    } else {
      if (holes === "9") {
        price += adultPlayers * 16 + seniorPlayers * 14 + juniorPlayers * 14;
      } else {
        price += adultPlayers * 24 + seniorPlayers * 22 + juniorPlayers * 22;
      }
    }

    // Transportation cost
    switch (transportation) {
      case "golf-cart":
        price +=
          holes === "9"
            ? adultPlayers * 12 + seniorPlayers * 12 + juniorPlayers * 12
            : adultPlayers * 20 + seniorPlayers * 20 + juniorPlayers * 20;
        break;
      case "single-rider-cart":
        price +=
          holes === "9"
            ? adultPlayers * 15 + seniorPlayers * 15 + juniorPlayers * 15
            : adultPlayers * 23 + seniorPlayers * 23 + juniorPlayers * 23;
        break;
      case "pull-cart":
        price +=
          holes === "9"
            ? adultPlayers * 3 + seniorPlayers * 3 + juniorPlayers * 3
            : adultPlayers * 6 + seniorPlayers * 6 + juniorPlayers * 6;
        break;
      case "walking":
        // Walking is free
        break;
      default:
        break;
    }

    return price;
  };

  return (
    <div className="container">
      <h2>Golf Price Calculator</h2>
      <div>
        <label>Holes:</label>
        <select
          value={holes}
          onChange={(e) => setHoles(e.target.value as "9" | "18")}
        >
          <option value="9">9 Holes</option>
          <option value="18">18 Holes</option>
        </select>
      </div>
      <div className="divider"></div>
      <div>
        <label>Day:</label>
        <select
          value={day}
          onChange={(e) => setDay(e.target.value as "weekend" | "weekday")}
        >
          <option value="weekend">Weekend</option>
          <option value="weekday">Weekday</option>
        </select>
      </div>
      <div className="divider"></div>
      <div>
        <label>Transportation:</label>
        <select
          value={transportation}
          onChange={(e) =>
            setTransportation(
              e.target.value as
                | "golf-cart"
                | "single-rider-cart"
                | "pull-cart"
                | "walking"
            )
          }
        >
          <option value="golf-cart">Golf Cart Rental per person</option>
          <option value="single-rider-cart">
            Golf Cart Rental single rider
          </option>
          <option value="pull-cart">Pull Cart Rental</option>
          <option value="walking">Walking</option>
        </select>
      </div>
      <div className="divider"></div>
      <div>
        <label>Number of Players:</label>
        <div>
          <label>Adults:</label>
          <select
            value={adultPlayers}
            onChange={(e) => setAdultPlayers(parseInt(e.target.value))}
          >
            {[...Array(5).keys()].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Seniors:</label>
          <select
            value={seniorPlayers}
            onChange={(e) => setSeniorPlayers(parseInt(e.target.value))}
          >
            {[...Array(5).keys()].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Juniors:</label>
          <select
            value={juniorPlayers}
            onChange={(e) => setJuniorPlayers(parseInt(e.target.value))}
          >
            {[...Array(5).keys()].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <h3>Total Price: ${calculatePrice()}</h3>
      </div>
    </div>
  );
};

export default GolfPriceCalculator;
