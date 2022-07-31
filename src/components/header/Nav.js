import React from "react";
import {Navbar, NavbarBrand} from 'reactstrap'

function Nav() {
    return ( 
        <div>
            <Navbar dark color="dark">
                <div className="container" style={{textAlign: 'start'}}>
                <NavbarBrand href="/">
                        Crafted Greenery
                </NavbarBrand>
                </div>
                
            </Navbar>
        </div>
     );
}

export default Nav;