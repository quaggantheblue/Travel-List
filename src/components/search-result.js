"use client";

import Image from "next/image";
import { useState } from "react";
import "dotenv/config";

export function SearchResult( {props} ) {
    return <li className="search-result">
        <div className="result-country">
            {/* <Image className="country-flag" /> */}
            <p className="country-name">{props.country}</p>
        </div>
        <div className="result-content">
            <div className="result-label">
                <p className="label-city">{props.name}</p>
                <p className="label-code">{props.country_code}</p>
            </div>
        </div>
    </li>
}