import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { use, useEffect, useState } from 'react';
import { Pracownik } from '../types/pracownik/pracownik';
import { PracownikItem } from './PracownikItem';
export const Pracownicy = () => {
    const [listaPracownikow, setListaPracownikow] = useState<Pracownik[]>([
        {
            imie: "Anna",
            nazwisko: "Nowak",
            stanowisko: "	Fantasy",
            placaBrutto: 5
        },
        {
            imie: "Marek",
            nazwisko: "	Zieliński",
            stanowisko: "Kryminał",
            placaBrutto: 3
        },
        {
            imie: "Karolina",
            nazwisko: "Wiśniewska",
            stanowisko: "Dla dzieci",
            placaBrutto: 7
        },
        {
            imie: "Piotr",
            nazwisko: "Kamiński",
            stanowisko: "Biografia",
            placaBrutto: 2
        },
    ]);
 
    return (
        <Container fluid>
            <Accordion defaultActiveKey="filtrowanie">
                <Accordion.Item eventKey="filtrowanie">
                    <Accordion.Header>Filtrowanie i sortowanie</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Nazwisko autora</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Liczba wydanych książek od</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Liczba wydanych książek do</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Gatunek literacki</Form.Label>
                                        <Form.Select>
                                            <option>Wybierz</option>
                                            <option value="1">Fantasy</option>
                                            <option value="2">Kryminał</option>
                                            <option value="3">Dla dzieci</option>
                                            <option value="4">Biografia</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Imię autora</th>
                        <th>Nazwisko autora</th>
                        <th>Gatunek literacki</th>
                        <th>Liczba wydanych książek</th>
                    </tr>
                </thead>
                <tbody>
                    {listaPracownikow.map((item, index) => <PracownikItem key={index} pracownik={item} />)}
                </tbody>
            </Table>
        </Container>
    )
}