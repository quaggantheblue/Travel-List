"use client";

import { Nav } from "@/components/nav";
import fetchWeatherResults from "@/lib/weather";
import { useEffect, useState } from "react";

export default function City( { params } ) {
    const [city, setCity] = useState({});
    const [weather, setWeather] = useState({});

    const fetchSearchResults = async () => {
        return await fetch(`https://geocoding-api.open-meteo.com/v1/get?id=${params.city}`)
        .then((response) => response.json())
        .then((city) => {
            return city;
        });
    }

    useEffect( () => {
        setCityState();
    }, []);

    useEffect( () => {
            setWeatherState();
    }, [city]);

    // these functions have to be standalone because useEffect breaks if the callback function is async for some reason
    const setCityState = async () => {
        setCity(await fetchSearchResults());
    }

    const setWeatherState = async () => {
        setWeather(await fetchWeatherResults(`${city.name}, ${city.admin1}`));
    }

    return <>
        <Nav />

        <main className="city-content">
            <div className="city-info center-column">
                <div className="city-label center-row">
                    <img className="country-flag flag-large" src={`https://flagsapi.com/${city.country_code}/flat/64.png`} />
                    <div className="city-main center-column">
                        <h1 className="city-names">{city.country}, {city.name}</h1>
                        <div className="city-time">
                            {weather?.location?.localtime.split(" ").splice(1, 1).join("")}
                        </div>
                    </div>
                </div>
                <div className="city-weather-section center-column">
                    <h1>Weather</h1>
                    <div className="city-weather center-row">
                        <h1>Now</h1>
                        <img src={weather?.current?.condition.icon} alt="Weather Icon" height="100px" />
                        <div className="weather-info">
                            <div className="weather-temperature">
                                {weather?.current?.temp_c} &deg;C {weather?.current?.temp_f} &deg; F
                            </div>
                            <div className="weather-text">{weather?.current?.condition.text}</div>
                        </div>
                    </div>
                    <div className="forecast center-column">
                        <div className="city-weather center-row">
                            <h1>{weather?.forecast?.forecastday[0].date.split("-").splice(1, 2).join("/")}</h1>
                            <img src={weather?.forecast?.forecastday[0].day.condition?.icon} alt="Weather Icon" height="100px" />
                            <div className="weather-info">
                                <div className="weather-temperature">
                                    {weather?.forecast?.forecastday[0].day.maxtemp_c} &deg;C {weather?.forecast?.forecastday[0].day.maxtemp_f} &deg; F
                                </div>
                                <div className="weather-text">{weather?.forecast?.forecastday[0].day.condition.text}</div>
                            </div>
                        </div>
                        <div className="city-weather center-row">
                            <h1>{weather?.forecast?.forecastday[1].date.split("-").splice(1, 2).join("/")}</h1>
                            <img src={weather?.forecast?.forecastday[1].day.condition?.icon} alt="Weather Icon" height="100px" />
                            <div className="weather-info">
                                <div className="weather-temperature">
                                    {weather?.forecast?.forecastday[1].day.maxtemp_c} &deg;C {weather?.forecast?.forecastday[1].day.maxtemp_f} &deg; F
                                </div>
                                <div className="weather-text">{weather?.forecast?.forecastday[1].day.condition.text}</div>
                            </div>
                        </div>
                        <div className="city-weather center-row">
                            <h1>{weather?.forecast?.forecastday[2].date.split("-").splice(1, 2).join("/")}</h1>
                            <img src={weather?.forecast?.forecastday[2].day.condition?.icon} alt="Weather Icon" height="100px" />
                            <div className="weather-info">
                                <div className="weather-temperature">
                                    {weather?.forecast?.forecastday[2].day.maxtemp_c} &deg;C {weather?.forecast?.forecastday[2].day.maxtemp_f} &deg; F
                                </div>
                                <div className="weather-text">{weather?.forecast?.forecastday[2].day.condition.text}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="city-map">
                <gmp-map center={`${city.latitude},${city.longitude}`} zoom="14" map-id="DEMO_MAP_ID">
                    <gmp-advanced-marker position={`${city.latitude},${city.longitude}`} title="Salut"></gmp-advanced-marker>
                </gmp-map>
            </div>
        </main>
    </>
}