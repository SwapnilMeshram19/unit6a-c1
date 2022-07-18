import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper=styled.div`
    display: flex;
    align-items: right;
    justify-content: right;
    gap:50px;
    font-size: 20px;
    background-color: #080d50;
    color: white;
`;
const Navbar =()=>{
    return (<NavbarWrapper>
        <Link to="/" className='link'>Home</Link>
        <Link to="/Login" className='link'>Login</Link>

    </NavbarWrapper>)
}

export default Navbar;