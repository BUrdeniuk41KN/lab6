
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { toggleTrafic } from '../StatusBar/Actions.jsx';
import './HeaderStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Header = () => {
    let dispatch = useDispatch();
    const typeOBJ2 = useSelector(state => state.StatusBarState.toggleTraficType);

    const handleBTN = () => {
        dispatch(toggleTrafic());
    }

    const currentURL = window.location.pathname;


    useEffect(() => {
    }, [typeOBJ2, currentURL])

    return (
        <div className='Header' >

            <Navbar bg="night" expand="lg">
                <Container>
                    <Navbar.Brand href="/">React App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" className='Link'><p className='none'>.</p>Home</Nav.Link>
                            <Nav.Link href="/TraficLight" className='Link'><p className='none'>.</p>Trafic Light</Nav.Link>
                            <Nav.Link href="/Error" className='Link'><p className='none'>.</p> Error Page</Nav.Link>
                            
                            {currentURL === "/TraficLight" ?
                                <div className="btn_menu Link">
                                    <p className='none'>.</p>
                                    <Form className='Switch_menu'>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch_menu"
                                            label="Toggle type"
                                            checked={typeOBJ2}
                                            onChange={() => { }}
                                            onClick={() => handleBTN()}
                                        />
                                    </Form>
                                </div> : null}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
