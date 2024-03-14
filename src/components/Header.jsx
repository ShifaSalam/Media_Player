import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" style={{borderRight:'0px'}}>
          <i className="fa-solid fa-upload fa-beat-fade fa-xl" style={{color: '#74C0FC',marginRight:'15px'}}></i>
            Media Player
          </Navbar.Brand>
        </Container>
      </Navbar>


    </div>
  )
}

export default Header