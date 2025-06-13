import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const HomePage = () => {
    return (
        <Container fluid>
            <h2 className="my-4">Witamy w naszym systemie!</h2>
            <Row>
                {[1, 2, 3, 4].map((nr) => (
                    <Col key={nr} className="mb-3">
                        <Card>
                            <Card.Header>Og³oszenie {nr}</Card.Header>
                            <Card.Body>
                                <Card.Text>Przyk³adowa treœæ og³oszenia {nr}.</Card.Text>
                                <Button variant="primary">Szczegó³y</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
