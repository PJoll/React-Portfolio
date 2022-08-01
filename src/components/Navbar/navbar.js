import React, {useState} from 'react'


const Navbar = () => {
    const [Nav, setNav] = useState(false)
    const handleClick = () => setNav(!Nav)

    
        return (
          <div className='navbar'>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#projects">Projects</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
            <br />
            </div>
      
           
        );
      }
      
export default function Navbar() {}
