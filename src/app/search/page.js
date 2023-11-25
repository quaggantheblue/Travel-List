import { Nav } from "@/components/nav";
import { SearchInput } from "@/components/search-input";

export default function Search() {
    return <>
        <Nav />
        <div className="content center-column">
            <h1>Search</h1>
            <SearchInput />
        </div>
    </>
}