import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Projects.css';

function Projects() {
    return (
        <Container className='projects'>
            <Row>
                <h1 className='projects-h'>featured-projects</h1>
                <Col>
                    <Card className='shadow'>
                        <Card.Header as='h5'>hello</Card.Header>
                        <Card.Body>
                            <Card.Title>v2</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='shadow'>
                        <Card.Header as='h5'>hello</Card.Header>
                        <Card.Body>
                            <Card.Title>v1</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='shadow'>
                        <Card.Header as='h5'>hello</Card.Header>
                        <Card.Body>
                            <Card.Title>Graceland Today</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;