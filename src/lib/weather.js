"use server";

import * as dotenv from "dotenv";

dotenv.config({path: "../../../.env"});

// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.WEATHER_API_KEY}

export default async function fetchWeatherResults(name) {
  return await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY_TWO}&q=${name}&days=3&aqi=no&alerts=no`, {cache: 'no-store'})
  .then((response) => response.json())
  .then((weather) => {
      return weather;
  });
}