"use client";

import { Nav } from "@/components/nav";
import { SearchResult } from "@/components/search-result";
import { findAll } from "@/lib/mongo";
import { useEffect, useState } from "react";

export default function Favourites() {
    const [favorites, setFavorites] = useState([]);

    useEffect( () => {
        findFavorites();
    }, []);

    const findFavorites = async () => {
        setFavorites(await findAll());
    }

    const logFavorites = () => {
        console.log(favorites);
    }

    return <>
        <Nav />
        <h1 className="favorites-header">Favourites</h1>
        <ul className="search-results center-column favorites-container">
            {favorites?.map(result => {
                return (
                    <SearchResult key={result.id} props={{...result}} />
                )
            })}
        </ul>
    </>
}