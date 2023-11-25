import Image from "next/image";

export function SearchInput() {
    return <div className="search-input-container">
        <input type="text" className="search-box" placeholder="Search..." />
        <button className="search-button">
            <Image 
                src="icons/magnifying-glass-solid.svg"
                width={20}
                height={20}
                alt="Search"
            />
        </button>
        
    </div>
}