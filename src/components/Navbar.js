import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function Nav() {
    return (
        <>
            <Container>
                <Navbar>
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src={"config/images/logo.png"}
                                width="300"
                                className="d-inline-block"
                            />{' '}
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
        </>
    )
}

export default Nav