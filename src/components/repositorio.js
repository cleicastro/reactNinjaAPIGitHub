import React from 'react'
import PropTypes from 'prop-types'

const Repositorio = ({ className, title, repos }) => (
    <div>
        <div className={className}>
            <h2>{title}</h2>
            <ul>
                {repos.map((repo) => (
                    <li><a href={repo.link}>{repo.name}</a></li>
                ))}
            </ul>
        </div>
    </div>
)

Repositorio.defaultProps = {
    className: ''
}
Repositorio.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    repos: PropTypes.array.isRequired

}

export default Repositorio