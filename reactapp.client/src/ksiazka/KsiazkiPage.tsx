import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { use, useEffect, useState } from 'react';
import { Samochod } from '../types/samochod/samochod';
import { SamochodItem } from './KsiazkaItem';
//
export const Ksiazki = () => {
    const [listaSamochodow, setListaSamochodow] = useState<Samochod[]>([
        {
            vin: "1",
            numerRejestracyjny: "W krainie cieni",
            opis: "Fantastyczna podróż przez...",
            cena: 39.99
        },
        {
            vin: "2",
            numerRejestracyjny: "Tajemnica ogrodu",
            opis: "Historia miłości i sekretów",
            cena: 44.90
        },
        {
            vin: "3",
            numerRejestracyjny: "Zwierzęta świata",
            opis: "Atlas przyrodniczy dla dzieci",
            cena: 49.00
        },
        {
            vin: "4",
            numerRejestracyjny: "KNS 4",
            opis: "Atlas przyrodniczy dla dzieci",
            cena: 59.00
        }
    ]);
    useEffect(() => {
        const listaSamochodowPobranychAPI: Samochod[] = [
            {
                vin: "1",
                numerRejestracyjny: "W krainie cieni",
                opis: "Fantastyczna podróż przez...",
                cena: 39.99
            },
            {
                vin: "2",
                numerRejestracyjny: "Tajemnica ogrodu",
                opis: "Historia miłości i sekretów",
                cena: 44.90
            },
            {
                vin: "3",
                numerRejestracyjny: "Zwierzęta świata",
                opis: "Atlas przyrodniczy dla dzieci",
                cena: 49.00
            }];
        setListaSamochodow(listaSamochodowPobranychAPI);
    }, [])
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
                                        <Form.Label>Szukaj po ISBN</Form.Label>
                                        <Form.Control type="text" />
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
                                        <Form.Label>Szukaj po nazwie książki</Form.Label>
                                        <Form.Control type="text" />
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
                        <th>VIN</th>
                        <th>Numer rejestracyjny</th>
                        <th>Opis</th>
                        <th>Cena</th>
                    </tr>
                </thead>
                <tbody>
                    {listaSamochodow.map((item, index) => <SamochodItem key={index} samochod={item} />)}
                </tbody>
            </Table>
        </Container>
    )
}