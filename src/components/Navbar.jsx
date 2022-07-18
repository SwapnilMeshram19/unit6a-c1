import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper=styled.div`
    display: flex;
    align-items: right;
    justify-content: right;
    gap:10px;
    padding-right: 30px;
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