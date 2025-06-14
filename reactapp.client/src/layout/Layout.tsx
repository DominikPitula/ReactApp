﻿import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
export function Layout() {
    return (
        <div className="app">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/" className="d-block">
                            <Image src="/image/1.png" className="logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link>
                                <Link to="/" className="d-block">Home</Link>
                            </Nav.Link>
                            <NavDropdown title="Księgarnia" id="magazyn">
                                <NavDropdown.Item>
                                    <Link to="/towary" className="d-block">Książki</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/towar" className="d-block">Książka</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Kadry" id="kadry">
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Pracownicy</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Pracownik</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Książki" id="transport">
                                <NavDropdown.Item>
                                    <Link to="/ksiazki" className="d-block">Książki</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/samochod" className="d-block">Dodaj książkę</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Autorzy" id="autorzy">
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Tabela autorów</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Umowy autorskie</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Inne 2" id="autorzy">
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Inne 2.1</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Inne 2.2</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="px-3">
                <Container fluid>
                    <Outlet />
                </Container>
            </div>
         
        </div>
    )
}