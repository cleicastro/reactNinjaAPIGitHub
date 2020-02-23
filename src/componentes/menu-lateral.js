import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const MenuLateral = ({name, lastname}) => (
    <div>
        <h1>Olá, {`${name}  ${lastname}`}!</h1>
        <Navbar>

        </Navbar>
        <Nav
            activeKey="/home"
            onSelect={key => alert(`Selecionado: ${key}`)}
        >
            <Nav.Item>
                <Nav.Link eventKey="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="linke-2">Active</Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
);

MenuLateral.defaultProps = {
    name: 'Desconhecido',
    lastname: 'Desconhecido'
}
export default MenuLateral
