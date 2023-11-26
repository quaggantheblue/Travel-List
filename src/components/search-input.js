"use client";

import Image from "next/image";
import { useState } from "react";

export function SearchInput() {
    const [query, setQuery] = useState("");

    return (
        <form className="search-input-container">
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
    )
}