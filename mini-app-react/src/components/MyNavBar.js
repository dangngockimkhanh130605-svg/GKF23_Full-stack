import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

function MyNavBar(){
    return(
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <i className='bi bi-box-fill'></i>Mini-app
                </Navbar.Brand>

                <Navbar.Toggle aria-controld="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/list">Danh sách</Nav.Link>
                        <Nav.Link as={NavLink} to="/add">Thêm sản phẩm mới</Nav.Link>

                        <NavDropdown title="Báo cáo" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/1">Thống kê</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1">Xuất file</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1">In ấn</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavBar;