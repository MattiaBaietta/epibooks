
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';





function Navigation() {
    return (
        
            <Navbar expand="lg" bg="light" variant="pills" activeKey="1">
                <Nav activeKey="/Link">
    
                    <Nav.Item >
                    <Nav.Link>
                        HOME
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                    <Nav.Link>
                        ABOUT
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                    <Nav.Link>
                        BROWSE
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
       

        
        
    )
}
export default Navigation