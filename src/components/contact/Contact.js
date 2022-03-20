import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './Contact.css';

function Contact() {
    return (
        <Container id="contact" className='contact'>
            <Row>
                <h1 className='contact-h'>let's-connect</h1>
                <h4>
                    Although I'm not in search of new work, I love to connect with like-minded people.
                </h4>
                <h4>
                    I'm always intrigued with new ideas, new projects, and new problems to solve. Feel free
                    to get connected via email or any social media platform.
                </h4>
                <Button className='contact-btn' size='lg'>
                    say hey
                </Button>
            </Row>
        </Container>
    );
}

export default Contact;