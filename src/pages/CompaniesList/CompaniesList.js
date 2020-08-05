import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Container, Card, Navbar, Nav, Col, Row, Form, FormControl, Button, Media } from 'react-bootstrap'
import "./CompaniesList.css";
import * as is from "is_js";
import { Link } from "react-router-dom";

export function CompaniesList({ getAllCompanies, companies }) {

    const searchRef = useRef();

    useEffect(() => {
        getAllCompanies();
    }, [])

    const onSearchTextSubmit = useCallback(() => {
        if (!is.empty(searchRef.current.value) && !is.undefined(searchRef.current.value)) {
            
        }
    }, []);


    return (
        <Container>
            <Col>
                <Col>
                    <Row>
                        <Container className="card-container">
                            <Card>
                                <Card.Header>
                                    <Navbar bg="light" expand="lg" variant="light">
                                        <Navbar.Brand>Companies</Navbar.Brand>
                                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav">
                                            <Nav className="mr-auto">
                                            </Nav>
                                            <Form inline>
                                            <FormControl ref={searchRef} type="text" placeholder="Search by company name" className="mr-sm-2" />
                                            <Button variant="outline-success" onClick={onSearchTextSubmit}>Search</Button>
                                            </Form>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </Card.Header>
                                <Card.Body>
                                    <Row lg="9" md="6" sm="3">
                                        {
                                            companies.map(company => {
                                                return (
                                                    <Col>
                                                        <Row>
                                                            <Card>
                                                                <Card.Body>
                                                                    <div className="grid-holder">
                                                                        <Media>
                                                                            <img width="90" height="60" src={company.abbImageUrl} alt="company-logo" />
                                                                        </Media>
                                                                    </div>
                                                                </Card.Body>
                                                                <Card.Footer>
                                                                    <Row>
                                                                        <Col>
                                                                            <Link to={`/companies/${company.name}`}>{company.name}</Link>
                                                                        </Col>
                                                                    </Row>
                                                                </Card.Footer>
                                                            </Card>
                                                        </Row>
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Row>
                </Col>
            </Col>
        </Container>
    )
}