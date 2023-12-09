"use client";


import 'dotenv/config';
import { Nav } from "@/components/nav";
import { SearchResult } from "@/components/search-result";
import Image from "next/image";
import { useState } from "react";

export default function Search() {
    const [query, setQuery] = useState("");
    const [cityResults, setCityResults] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setCityResults(await fetchSearchResults(query));
    }

    const fetchSearchResults = async (query) => {
        return await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=10&language=en&format=json`)
        .then((response) => response.json())
        .then((cities) => {
            return cities.results;
        });
    }

    return <>
        <div className="search-content center-column">
            <Nav />

            <h1>Search for a city you'd like to visit</h1>

            <div className="search-input-container center-row">
                <form onSubmit={handleSubmit} className="search-form">
                    <input onChange={(e) => setQuery(e.target.value)} value={query} type="text" className="search-box" placeholder="Search..." />
                    <button type="submit" className="search-button">
                        <Image 
                            src="icons/magnifying-glass-solid.svg"
                            width={20}
                            height={20}
                            alt="Search"
                        />
                    </button>
                </form>
            </div>

            <ul className="search-results center-column">
                {cityResults?.map(result => {
                    return (
                        <SearchResult key={result.id} props={{...result}} />
                    )
                })}
            </ul>
        </div>
    </>
}