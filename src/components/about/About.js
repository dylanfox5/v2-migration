import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './About.css';

function About() {
    return (
        <Container className='about'>
            <Row>
                <Col sm={12} lg={6}>
                    <h1 className='about-h'>about-me</h1>
                    <p>
                        Leadership <span>//</span> Innovation <span>//</span> Problem-Solving
                    </p>
                    <p>
                        I'm a strong advocate for serving others; choosing to have
                        the humility to put others first and care for others. A good leader must first be a good follower.
                        These are the foundations of <span>leadership</span>.
                    </p>
                    <p>
                        Continuously inventing and reinventing how I can serve others & society. The term
                        Futurist is one I often use to describe myself. The future and its possibilities excite me.
                        I think our potential as humans are limitless when <span>innovation</span> is at the forefront.
                    </p>
                    <p>
                        The art of understanding an obstacle, how it works, and how it can be overcome, is one
                        I find nothing short of beautiful. The leaders that bring forth our future and open its 
                        possibilities are nothing without the vision of <span>problem-solving</span>.
                    </p>
                    <p>
                        This is the ideology I live each day by. Be sure to continue on or follow me on any social media
                        to see what that looks like. 🚀
                    </p>
                </Col>
                <Col sm={12} lg={6}>
                    <Image src="../assets/hs.png"></Image>
                </Col>
            </Row>
        </Container>
    );
}

export default About;