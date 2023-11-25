import Image from "next/image";
import Link from "next/link";

export function Nav() {
    return <nav id="navbar">
        <div className="link-container">
            <Link className="nav-link" href="/">Home</Link>
            <Link className="nav-link" href="search">Search</Link>
            <Link className="nav-link" href="favourites">Favourites</Link>
        </div>
        <div className="user-container">
            <Image 
                src="circle-user-solid.svg"
                width={30}
                height={30}
                alt="User Icon"
            />
            <Image 
                src="bars-solid.svg"
                width={20}
                height={20}
                alt="Menu Icon"
            />
        </div>
    </nav>
}