"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "dotenv/config";
import Link from "next/link";
import { addToDatabase, findAndDelete, findById } from "@/lib/mongo";

export function SearchResult( {props} ) {
    const [favorite, setFavorite] = useState(false);
    const [icon, setIcon] = useState("icons/star-regular.svg");

    useEffect( () => {
        checkFavorite();
    }, []);

    const checkFavorite = async () => {
        const city = await findById(props.id);
        if (city.length != 0) {
            // city is in favorites
            setFavorite(true);
            setIcon("icons/star-solid.svg")
        } else {
            // city is not in favorites
        }
    }

    const handleFavorite = async () => {
        if (!favorite) {
            setFavorite(true);
            setIcon("icons/star-solid.svg");
            // add to database

            const data = {
                flag: `https://flagsapi.com/${props.country_code}/flat/64.png`,
                country: props.country,
                name: props.name,
                country_code: props.country_code,
                id: props.id
            }

            await addToDatabase(data);
        }
        if (favorite) {
            setFavorite(false);
            setIcon("icons/star-regular.svg");
            // remove from database

            await findAndDelete(props.id);
        }
    }

    return <li className="search-result center-row">
        <Link className="result-link" href={`/${props.id}`} >
            <div className="result-country center-row">
                <img alt="Flag" className="country-flag" src={`https://flagsapi.com/${props.country_code}/flat/64.png`} />
                <p className="country-name">{props.country}</p>
            </div>
            <div className="result-content">
                <div className="result-label">
                    <p className="label-city">{props.name}</p>
                    <p className="label-code">{props.country_code}</p>
                </div>
            </div>
        </Link>
        <button onClick={handleFavorite} className="favorite-button">
            <Image 
                src={icon}
                width={30}
                height={30}
                alt="Search"
            />
        </button>
    </li>
}