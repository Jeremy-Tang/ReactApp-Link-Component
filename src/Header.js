import React from 'react';
import './Header.css';
import logo from './mhub.png'
import theame from './teamMhub.png'

function Header(){
return(
    <div className="header">
        <img className="theame" src={theame} />
        <img className="logo" src={logo} />
        <h1>This Is My Learning Project</h1>
    
    </div>
    )
}
export default Header;