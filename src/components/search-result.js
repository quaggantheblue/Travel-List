"use client";

import Image from "next/image";
import { useState } from "react";
import "dotenv/config";
import Link from "next/link";

export function SearchResult( {props} ) {
    return <li className="search-result">
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
    </li>
}