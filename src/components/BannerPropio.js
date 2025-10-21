import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BannerPropio() {
    return (
        <Container fluid> 
            <Row>
                <Col lg={12} className="p-0"> 
                    <Image
                      src="https://t3.ftcdn.net/jpg/06/89/21/80/360_F_689218058_gCb2sNfRKbDvYc5rldoXDUxoepudtaGl.jpg"
                      fluid
                      style={{ width: '100%', height: 'auto' }}
                      alt="Banner tecnología"
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default BannerPropio;