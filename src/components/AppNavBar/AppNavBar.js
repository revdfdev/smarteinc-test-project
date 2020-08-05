import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export function AppNavBar({}) {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand as={Link} to="/">IG Account details</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
            </Navbar.Collapse>
        </Navbar>
    )
}