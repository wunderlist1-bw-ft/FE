import React from "react";
import { connect } from "react-redux";

const Search = ({ setQuery }) => {
    const handleChange = e => {
        setQuery(e.target.value);
    }

    return (
        <div className="search">
            <input id="search" name="search" type="text" placeholder="Search ToDos" onChange={handleChange} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
        lists: state.lists
    }
}
export default connect(mapStateToProps, {})(Search);