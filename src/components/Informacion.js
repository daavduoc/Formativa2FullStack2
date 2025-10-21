import { Col, Image, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Informacion() {
    return (
        <Container>
            <Row className="align-items-center">
                <Col lg={6}>
                    <Image
                        src="https://andespc.com/img/movil_header_logo.png"
                        fluid
                        style={{ width: '100%', height: 'auto', alignContent: 'center' }}
                        alt="Banner tecnología"
                    />
                </Col>
                <Col lg={6}>
                    <h2>Misión</h2>
                    <p>Ofrecer a nuestros clientes en Chile soluciones tecnológicas de calidad mediante la venta y distribución de componentes y accesorios para computadores, acompañando con asesoría especializada y herramientas innovadoras que faciliten la elección y cotización, brindando una experiencia simple, eficiente y confiable.</p>
                    <br />
                    <h2>Visión</h2>
                    <p>Ser la empresa líder en el mercado chileno de tecnología y componentes para computadores, reconocida por su innovación digital, atención al cliente y capacidad de ofrecer soluciones integrales que simplifiquen el armado y compra de PCs, impulsando el acceso a tecnología de vanguardia a precios competitivos.</p>
                </Col>
            </Row>
            <Row className="align-items-center justify-content-center">
                <Col xs={12} lg={4} className="d-flex justify-content-center mb-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vSxsedG7WtR3tP4UuZfXONjPt3JK2qoCzA&s" />
                        <Card.Body>
                            <Card.Title>Procesadores</Card.Title>
                            <Card.Text>
                                El cerebro de tu PC, encargado de ejecutar tareas y procesar información rápidamente para un rendimiento óptimo.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={4} className="d-flex justify-content-center mb-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                            src="https://sigmatiendas.com/cdn/shop/collections/1_af9115c3-1ee8-4aa6-910c-594954255764.jpg?v=1734117325&width=2048" />
                        <Card.Body>
                            <Card.Title>Memorias</Card.Title>
                            <Card.Text>
                                Unidad de almacenamiento ultrarrápida que acelera el arranque y la carga de aplicaciones, optimizando el rendimiento general del equipo.                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={4} className="d-flex justify-content-center mb-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                            src="https://media.spdigital.cl/thumbnails/products/p7qt21dr_cd0369df_thumbnail_4096.jpg" />
                        <Card.Body>
                            <Card.Title>SSD M2</Card.Title>
                            <Card.Text>
                                Unidad de almacenamiento ultrarrápida que acelera el arranque y la carga de aplicaciones, optimizando el rendimiento general del equipo.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Informacion;