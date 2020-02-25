import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = () => (
    <div className="searchs input-group mb-2">
        <input type="search" className="form-control col-4" placeholder="Digite o nome do usuário no GitHub" />
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></span>
        </div>
    </div>
)

export default Search