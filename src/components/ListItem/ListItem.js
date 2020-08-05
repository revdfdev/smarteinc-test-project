import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./ListItem.css";
import profileImage from "../../resources/images/img-avatar.png"

export function ListItem({ employee }) {
    return (
        <Container>
            <Row className="d-flex">
                <div className={employee.isLocked ? "vert-divider m-1 justify-content-start" : "vert-divider-active m-1 justify-content-start"}>
                </div>
                <div className="m-1 avatar-wrapper">
                    <img width={25} height={25} alt="img-avatar" className="image-avatar" src={profileImage} />
                </div>
                <Col>
                    <Row>
                        <Col>
                            <h5 className="h5">{employee.employeeName}</h5>
                            <Row>
                                <i className="fa fa-breifcase mr-2" aria-hidden="true"></i>
                                <p><small>{employee.designation}</small></p>
                            </Row>
                            <Row>
                                <i className="fa fa-email mr-2" aria-hidden="true"></i>
                                <p><small>{employee.email}</small></p>
                            </Row>
                            <Row>
                                <i className="fa fa-phone mr-2" aria-hidden="true"></i>
                                <p><small>{employee.contact}</small></p>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}