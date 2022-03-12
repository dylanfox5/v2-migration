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
                <Col xs={12} md={6} lg={4}>
                    <Card className='shadow'>
                        <Card.Header as='h5' className='card-title'>v2</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                The second interation of my porfolio website. Used React, React-Bootstrap, JS, jQuery, HTML & CSS 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className='shadow'>
                        <Card.Header as='h5' className='card-title'>v1</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                The first interation of my porfolio website. Used JS, jQuery, HTML & CSS, Bootstrap
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className='shadow'>
                        <Card.Header as='h5' className='card-title'>Graceland Today</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Conceptualized and built an online calendar for GU. It contained daily, weekly, & monthly events.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;