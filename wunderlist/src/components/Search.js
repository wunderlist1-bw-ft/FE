import React, { useState } from "react";
import { connect } from "react-redux";

const Search = () => {
    const [query, setQuery] = useState('');

    const handleChange = e => {
        setQuery(e.target.value);
    }

    return (
        <div className="search">
            <input id="search" name="search" type="text" placeholder="Search ToDos" onChange={handleChange} />
        </div>
    )
}

export default Search;