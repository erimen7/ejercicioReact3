import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Nav=styled.nav`
    background-color: #43436b;
    text-decoration: none;
`;
const Li=styled.nav`
    background-color:blue;
    border:1px solid red;
    color:black;
    text-decoration: none;
`;
const Enlace = () => {
  return (
    <>
    <div>Enlace</div>
    <Nav>
        <ul>
            <Li>
                <Link to={"/Login"}> Autentificación</Link>
            </Li>
        </ul>  
    </Nav>
    </>
  )
}

export default Enlace