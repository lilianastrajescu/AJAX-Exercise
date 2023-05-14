import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  let apiKey = "f3009e4852fa0a079dab291dabf020c4";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units&metric`;
  axios.get(url).then(showTemperature);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
    console.log(response.data);
  }

  return (
    <div>
      The temperature in {props.city} is {Math.round(temperature)}°C
    </div>
  );
}
