import React from 'react'
import {Navbar,Nav} from "react-bootstrap"
export const Header = () => {
    return (
        <Navbar 
        collapseOnSelect
        variant="dark"
        bg="info"
        expand="md"
        >
            <Navbar.Brand>
                <img src="https://th.bing.com/th/id/R.f516cba70fbce3f6c220560e8e7834c1?rik=GbL%2fBvE9PTHALg&riu=http%3a%2f%2fwww.hirefive.co.uk%2fwp-content%2fuploads%2f2016%2f08%2fLogo-No-Background.png&ehk=BNq0FXH9I21OavaV17ZbDaUKdSN%2fJCZg5FTgNOkgnOw%3d&risl=&pid=ImgRaw&r=0" width="50px" alt='image'/>

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <div className='ml-auto'>
                <Nav>
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/Tickets">Tickets</Nav.Link>
                    <Nav.Link >Logout</Nav.Link>
                </Nav>

                </div>
              
            </Navbar.Collapse>
            
        </Navbar>
    )
}
