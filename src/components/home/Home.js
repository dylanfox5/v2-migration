import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import './Home.css';

function Home() {
    return (
        <Container className='home'>
            <Row>
                <Col sm={12} lg={6} className='animate__animated animate__fadeInLeft animate__delay-1s'>
                    <h1 className='home-sh'>dylan-fox</h1>
                    <h1 className='home-h'>innovator & developer</h1>
                    <Button href='#about' className='home-btn' size='lg'>
                        let's ride
                    </Button>
                </Col>
                <Col sm={12} lg={6}>
                    
                </Col>
            </Row>
        </Container>
    );
}

export default Home;