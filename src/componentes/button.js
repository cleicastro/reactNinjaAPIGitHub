import React from 'react'

const Button = (({ children, handleClick, name }) => (
    <button type="button" className={name} onClick={handleClick}>{children}</button>
))

export default Button