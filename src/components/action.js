import React from 'react'

const Action = ({ getRepos, getFav }) => (
    <div className="actions">
        <button className="btn btn-primary col-2" onClick={getRepos}>Ver Repositórios</button>
        <button className="btn btn-info col-2 ml-2" onClick={getFav}>Ver favoritos</button>
    </div>
)

export default Action