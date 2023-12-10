import Image from "next/image";
import Link from "next/link";

export function Nav() {
    return <nav id="navbar">
        <div className="link-container">
            <Link className="nav-link" href="/">Home</Link>
            <Link className="nav-link" href="favourites">Favourites</Link>
        </div>
    </nav>
}