import { render } from '@testing-library/react';
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import CartSummary from './CartSummary';
import {Link} from 'react-router-dom'

const Navi = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Northwind App</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink><Link to="Form1">Form</Link></NavLink>                            
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="Form2">Form2</Link></NavLink>                            
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <CartSummary remove={props.remove} cart={props.cart}></CartSummary>
                    </Nav>
                    <NavbarText></NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}
export default Navi;