import React, { useEffect } from 'react'
import { Container, Col, Row, Card, Button, Navbar, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CompanyDetails.css"

export function CompanyDetails({ match, companyInfo, getCompanyInformation, history }) {
    console.log("Match", match.params);
    const { companyName } = match.params;

    useEffect(() => {
        getCompanyInformation()
    }, [companyInfo])

    const showEmployees = (e) => {
        e.preventDefault();
        history.push({
            pathname: `/companies/${companyName}/employees`,
            companyName: companyName
        })
    }

    console.log("Company info", companyInfo);

    return (
        <Container>
            <Col>
                <Row>
                    <Container className="pt-5 pb-5">
                        <Card>
                            <Card.Header>
                                <Navbar bg="light" expand="lg" variant="light">
                                        <Navbar.Brand>Account </Navbar.Brand>
                                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between">
                                            <Nav className="mr-auto">
                                            </Nav>
                                            <Col className="d-flex justify-content-end">
                                                <Navbar.Text as={Button} className="m-1 text-white">
                                                    <i className="fa fa-retweet mr-2" aria-hidden="true"></i>
                                                    Update
                                                </Navbar.Text>
                                                <Navbar.Text as={Button} className="m-1 text-white">
                                                    <i className="fa fa-comments mr-2" aria-hidden="true"></i>
                                                    Feedback
                                                </Navbar.Text>
                                            </Col>
                                        </Navbar.Collapse>
                                    </Navbar>
                            </Card.Header>
                            <Card.Body>
                                <Col>
                                    <Row>
                                        <div className="text-center m-2">
                                            <img src={companyInfo.abbImageUrl} className="rounded img-fluid img-thumbnail avatar" alt="company-image"/>
                                        </div>
                                        <Col lg="4">
                                            <Row>
                                                <p className="h5 mr-2">{companyInfo.name}</p>
                                                <i className="fa fa-linkedin-square mr-2 color-blue text-center" aria-hidden="true"></i>
                                            </Row>
                                            <Row>
                                                <p className="lead"><small className="text-muted">{companyInfo.address}</small></p>
                                            </Row>
                                        </Col>
                                        <div className="vert-divider"></div>
                                        <Col lg="4">
                                            <Row>
                                                <Nav.Link href={`https://${companyInfo.website}`} target="_blank">{companyInfo.website}</Nav.Link>
                                            </Row>
                                            <Row>
                                                <p className="lead ml-2"><small className="text-muted">{companyInfo.phone}</small></p>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row lg="12">
                                        <Col lg="6">
                                            <Row>
                                                <Form.Group controlId="formCompanyName">
                                                    <Form.Label>Company name</Form.Label>
                                                    <Form.Control className="no-border" type="text" placeholder="Comapny" value={companyInfo.name} />
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group controlId="formComapnyAddress">
                                                    <Form.Label>Address</Form.Label>
                                                    <Form.Control className="no-border" as="textarea" rows="3" placeholder="Address" value={companyInfo.address} />
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group controlId="formPhoneNumber">
                                                    <Form.Label>Phone</Form.Label>
                                                    <Form.Control className="no-border" type="tel" placeholder="Phone" value={companyInfo.phone} />
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group controlId="formWebsite">
                                                    <Form.Label>Website</Form.Label>
                                                    <Form.Control className="no-border" type="text" placeholder="Website" value={`https://${companyInfo.website}`}/>
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group controlId="formOwnership">
                                                    <Form.Label>Ownership</Form.Label>
                                                    <Form.Control className="no-border" type="text" placeholder="Ownership" value={companyInfo.ownership} />
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group controlId="forLinkedInUrl">
                                                    <Form.Label>LinkedIn url</Form.Label>
                                                    <Form.Control className="no-border" type="text" placeholder="LinkedUrl" value={`https://${companyInfo.linkedInUrl}`} />
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group controlId="forParentCompany">
                                                    <Form.Label>Parent company</Form.Label>
                                                    <Form.Control className="no-border" type="text" placeholder="Parent company" value={companyInfo.parentCompany} />
                                                </Form.Group>
                                            </Row>
                                        </Col>
                                        <Col lg="6">
                                            <Row>
                                                <Form.Group controlId="forPrimaryIndusty">
                                                    <Form.Label>Primary industry</Form.Label>
                                                    <Form.Control className="no-border" type="text" placeholder="Primary industy" value={companyInfo.primaryIndustry} />
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group controlId="forRevenue">
                                                    <Form.Label>Revenue</Form.Label>
                                                    <Form.Control className="no-border" type="text" placeholder="Revenue" value={companyInfo.revenue} />
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group controlId="formEmployeesize">
                                                    <Form.Label>Employee size</Form.Label>
                                                    <Form.Control className="no-border" type="text" placeholder="Employee size" value={companyInfo.employeeSize} />
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group controlId="forSic">
                                                    <Form.Label>SIC</Form.Label>
                                                    <Form.Control className="no-border" type="text" placeholder="SIC" value={companyInfo.sic}  />
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group controlId="forNaic">
                                                    <Form.Label>NAIC</Form.Label>
                                                    <Form.Control className="no-border" type="text" placeholder="NAIC" value={companyInfo.naic} />
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group controlId="forAllIndustry">
                                                    <Form.Label>All Industries</Form.Label>
                                                    <Form.Control className="no-border" type="text" placeholder="All Industries" value={companyInfo.allIndustry} />
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group controlId="forAllSIC">
                                                    <Form.Label>All SIC</Form.Label>
                                                    <Form.Control className="no-border" type="text" placeholder="All SIC" value={companyInfo.allSic} />
                                                </Form.Group>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex justify-content-end">
                                    <Button color="primary" as={Link} to={`${companyName}/employees`}>View employees</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Container>
                </Row>
            </Col>
        </Container>
    )
}
