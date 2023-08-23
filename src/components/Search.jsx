import React from "react";
import { useGlobalContext } from "../context";

const Search = () => {
    const {query, searchSong}=useGlobalContext();
    return (
        <div className="search">
            <form className="form" onSubmit={(e)=>e.preventDefault()}>
                <div>
                    <input className="input" type="text" placeholder="Search Song Here"
                    onChange={(e)=>searchSong(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}

export default Search;