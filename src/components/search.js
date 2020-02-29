import React from 'react'
import PropTypes from 'prop-types';

const Search = ({handleSearch}) => (
    <div className="searchs input-group mb-2">
        <input type="search" className="form-control col-4"
            placeholder={"Digite o nome do usuário no GitHub"}
            onKeyUp={handleSearch} />
        {/* {<div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></span>
        </div>} */}
    </div>
)
Search.prototype = {
    handleSearch: PropTypes.func.isRequired
}
export default Search