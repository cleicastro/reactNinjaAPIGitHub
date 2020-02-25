import React from 'react'
import PropTypes from 'prop-types'

const Button = (({ children, handleClick, name, disabled}) => (
    <button type="button" className={name} onClick={handleClick} disabled={disabled}> {children} </button>
))
Button.prototype = {
    handleClick: PropTypes.func.isRequired,
    name: PropTypes.string,
    disabled: PropTypes.bool
}
export default Button