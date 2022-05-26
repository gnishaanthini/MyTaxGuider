import React from 'react';
import { Nav, Navbar, Container, Row, Col } 
        from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
  
// Import Custom CSS
import "./header.css";

function Header() {
    return(
        <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                  <h2>Self Assessment of Tax</h2>
              </Navbar.Brand>
            </Container>
         </Navbar>
        </header>
        </div>
    )
}
export default Header;