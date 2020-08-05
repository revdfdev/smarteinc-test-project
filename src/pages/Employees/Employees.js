import React, { useEffect, useCallback, useRef } from 'react'
import { Container, Col, Row, Nav, Form, Navbar, FormControl, Button, Card } from 'react-bootstrap'
import Lazyload from "react-lazyload";
import ListItem from '../../components/ListItem';
import Spinner from "../../components/Spinner";
import * as is from "is_js";

export function Employees({ location, employees, getCompanyEmployees }) {

    const searchRef = useRef();

    useEffect(() => {
        getCompanyEmployees(location.state.companyName)
        return () => {
        }
    }, [employees])

     const onSearchTextSubmit = useCallback(() => {
         if (!is.empty(searchRef.current.value) && !is.undefined(searchRef.current.value)) {

         }
     }, []);

    return (
        <Container>
            <Col>
                <Col>
                    <Row>
                        <Container className="pt-5 pb-5">
                            <Card>
                                <Card.Header>
                                    <Navbar bg="light" expand="lg" variant="light">
                                        <Navbar.Brand>Contacts list</Navbar.Brand>
                                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav">
                                            <Nav className="mr-auto">
                                            </Nav>
                                            <Form inline>
                                            <FormControl ref={searchRef} type="text" placeholder="Search by company name" className="mr-sm-2" />
                                            <Button variant="outline-success" onClick={onSearchTextSubmit}>Search</Button>
                                            </Form>
                                            <Navbar.Text as={Button} className="m-1 text-white">
                                                <i className="fa fa-comments mr-2" aria-hidden="true"></i>
                                                Feedback
                                            </Navbar.Text>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </Card.Header>
                                <Card.Body>
                                    <Col>
                                        <Row lg="4" md="2" sm="1">
                                            {employees.length > 0 && 
                                                employees.map(employee => (
                                                    <Lazyload key={employee.name} 
                                                        height={100}
                                                        offset={[-100, 100]}
                                                        placeholder={<Spinner />}>
                                                        <ListItem
                                                        employee={employee}  />
                                                    </Lazyload>
                                                ))
                                            }
                                        </Row>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Row>
                </Col>
            </Col>
        </Container>
    )
}
