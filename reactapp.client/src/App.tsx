import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
    return (
        <Container fluid>
            <div className="mb-3">
                Witamy w naszej księgarni internetowej – miejscu, gdzie pasja do książek łączy się z wygodą zakupów online. Oferujemy bogaty wybór literatury: od powieści obyczajowych, przez fantastykę i kryminały, po literaturę faktu, książki historyczne i przyrodnicze.

            </div>
            <div className="mb-3">
                Każda książka to nowa przygoda, inspiracja lub chwila refleksji – dlatego dbamy o to, by nasza oferta spełniała oczekiwania zarówno wymagających czytelników, jak i tych, którzy dopiero zaczynają swoją literacką podróż.

            </div>
            <hr />
            <Row>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-3 h-100">
                    <Card className="h-100">
                        <Card.Header>Książka obyczajowa</Card.Header>
                        <Card.Body className="d-flex flex-column">
                            <Card.Text className="mb-4">
                                Osadzona w realiach II wojny światowej powieść o odwadze, poświęceniu i nadziei. Młoda kobieta wstępuje do ruchu oporu, ryzykując życie, by ocalić to, co dla niej najważniejsze.
                            </Card.Text>
                            <div className="mt-auto">
                                <Button variant="primary" className="w-100">Szczegóły</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3} className="mb-3 h-100">
                    <Card className="h-100">
                        <Card.Header>Książka obyczajowa</Card.Header>
                        <Card.Body className="d-flex flex-column">
                            <Card.Text className="mb-4">
                                Poruszająca historia o miłości, stracie i drugich szansach. W małym miasteczku bohaterka odkrywa, że przeszłość nie zawsze musi definiować przyszłość, a nowe początki bywają piękniejsze, niż się wydaje.
                            </Card.Text>
                            <div className="mt-auto">
                                <Button variant="primary" className="w-100">Szczegóły</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3} className="mb-3 h-100">
                    <Card className="h-100">
                        <Card.Header>Książka fantasy</Card.Header>
                        <Card.Body className="d-flex flex-column">
                            <Card.Text className="mb-4">
                                Pełna magii i tajemnic opowieść o młodym bohaterze, który wyrusza w niebezpieczną podróż, by ocalić swój świat przed siłami ciemności. Spotyka smoki, czarodziejów i niezwykłe stworzenia, odkrywając własne przeznaczenie i ukryte moce.
                            </Card.Text>
                            <div className="mt-auto">
                                <Button variant="primary" className="w-100">Szczegóły</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-3 h-100">
                    <Card className="h-100">
                        <Card.Header>Książka przyrodnicza</Card.Header>
                        <Card.Body className="d-flex flex-column">
                            <Card.Text className="mb-4">
                                Książka przyrodnicza w przystępny sposób przedstawia fascynujący świat roślin i zwierząt. Zawiera ciekawostki, barwne ilustracje oraz opisy zjawisk zachodzących w przyrodzie, zachęcając czytelnika do poznawania natury i dbania o środowisko.
                            </Card.Text>
                            <div className="mt-auto">
                                <Button variant="primary" className="w-100">Szczegóły</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-3">

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/image/1.png" />
                        <Card.Body>
                            <Card.Title>Książka 1</Card.Title>
                            <Card.Text>
                                Zestaw klasycznych powieści
                                Zanurz się w świecie literatury, gdzie każda książka to nowa przygoda, refleksja lub emocjonująca historia. Idealny wybór dla miłośników klasyki.
                            </Card.Text>
                            <Button variant="primary">Czytaj więcej</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-3">

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/image/1.png" />
                        <Card.Body>
                            <Card.Title>Książka 2</Card.Title>
                            <Card.Text>
                                Kolekcja bestsellerów
                                Najchętniej czytane tytuły ostatnich lat! Doskonały wybór dla tych, którzy chcą być na bieżąco z literackimi hitami.
                            </Card.Text>
                            <Button variant="primary">Czytaj więcej</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-3">

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/image/1.png" />
                        <Card.Body>
                            <Card.Title>Książka 3</Card.Title>
                            <Card.Text>
                                Kolekcja bestsellerów
                                Najchętniej czytane tytuły ostatnich lat! Doskonały wybór dla tych, którzy chcą być na bieżąco z literackimi hitami.
                            </Card.Text>
                            <Button variant="primary">Czytaj więcej</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-3">

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/image/1.png" />
                        <Card.Body>
                            <Card.Title>Książka 4</Card.Title>
                            <Card.Text>
                                Nowości wydawnicze
                                Świeżo wydane książki, które dopiero co trafiły na półki! Bądź na bieżąco i sięgnij po najnowsze tytuły, zanim zrobią to inni.
                            </Card.Text>
                            <Button variant="primary">Czytaj więcej</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-3">

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/image/1.png" />
                        <Card.Body>
                            <Card.Title>Książka 5</Card.Title>
                            <Card.Text>
                                Autentyczne historie, które inspirują. Poznaj życiorysy znanych postaci i reportaże z prawdziwego świata.
                            </Card.Text>
                            <Button variant="primary">Czytaj więcej</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
}

export default App;