import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { use, useEffect, useState } from 'react';
import { Towar } from '../types/towar/towar';
import { TowarItem } from './TowarItem';
//
export const Towary = () => {
    const [listaTowarow, setListaTowarow] = useState<Towar[]>([
        {
            kod: "1",
            nazwa: "Nazwa 1",
            kategoria: "Kategoria 1",
            pkwiu: "1",
            cena: 1 
        },
        {
            kod: "2",
            nazwa: "Nazwa 2",
            kategoria: "Kategoria 2",
            pkwiu: "2",
            cena: 2
        },
        {
            kod: "3",
            nazwa: "Nazwa 3",
            kategoria: "Kategoria 3",
            pkwiu: "3",
            cena: 3
        },
        {
            kod: "4",
            nazwa: "Nazwa 4",
            kategoria: "Kategoria 4",
            pkwiu: "4",
            cena: 4
        }
    ]);
    useEffect(() => {
        const listaTowarowPobranychAPI: Towar[] = [
            {
                kod: "1",
                nazwa: "W cieniu drzew",
                kategoria: "Literatura piękna",
                pkwiu: "978-83-123456-2-7",
                cena: 44.90
            },
            {
                kod: "2",
                nazwa: "Ziemia ludzi",
                kategoria: "Literatura faktu",
                pkwiu: "978-83-123456-1-0",
                cena: 39.99
            },
            {
                kod: "3",
                nazwa: "Magia i smok",
                kategoria: "Fantasy",
                pkwiu: "978-83-123456-3-4",
                cena: 49.00
            }];
        setListaTowarow(listaTowarowPobranychAPI);
    },[])
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
                                        <Form.Label>Szukaj po nazwie</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Cena od</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Cena do</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Kategoria</Form.Label>
                                        <Form.Select>
                                            <option>Wybierz</option>
                                            <option value="1">Literatura piękna</option>
                                            <option value="2">Literatura faktu</option>
                                            <option value="3">Fantasy</option>
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
                        <th>Kod</th>
                        <th>Nazwa</th>
                        <th>Kategoria</th>
                        <th>PKWIU</th>
                        <th>Cena</th>
                    </tr>
                </thead>
                <tbody>
                    {listaTowarow.map((item, index) => <TowarItem key={index} towar={item} />)}
                    {/*Iterujemy */}
                </tbody>
            </Table>
        </Container>
    )
}