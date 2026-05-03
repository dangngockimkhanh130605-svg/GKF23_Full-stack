import { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Alert } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import '../App.css';

function MyNavBar() {
  const [showNotice, setShowNotice] = useState(false);

  const handleDevelopingFeature = () => {
    setShowNotice(true);

    setTimeout(() => {
      setShowNotice(false);
    }, 3000);
  };

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/home">
            <i className="bi bi-box-fill"></i> Mini-app
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/list">
                Danh sách
              </Nav.Link>

              <Nav.Link as={NavLink} to="/add">
                Thêm sản phẩm mới
              </Nav.Link>

              <NavDropdown title="Báo cáo" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleDevelopingFeature}>
                  Thống kê
                </NavDropdown.Item>

                <NavDropdown.Item onClick={handleDevelopingFeature}>
                  Xuất file
                </NavDropdown.Item>

                <NavDropdown.Item onClick={handleDevelopingFeature}>
                  In ấn
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showNotice && (
        <Alert variant="warning" className="m-3">
          Phần mềm đang phát triển!
        </Alert>
      )}
    </>
  );
}

export default MyNavBar;