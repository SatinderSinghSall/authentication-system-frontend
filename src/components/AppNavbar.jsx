import { useState } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Modal from "react-bootstrap/Modal";

function AppNavbar() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) {
      setShowModal(true);
      return;
    }

    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(search)}`,
      "_blank",
    );
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/">
          🔐 {/* Small screens */}
          <span className="d-inline d-lg-none">Authentication System</span>
          {/* Large screens */}
          <span className="d-none d-lg-inline">
            Satinder Authentication System
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="offcanvasNavbar" />

        <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Navigation</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>

              <Nav.Link href="/login">Login</Nav.Link>

              <Nav.Link href="/register">Register</Nav.Link>

              <NavDropdown title="My Websites">
                <NavDropdown.Item
                  href="https://satinder-portfolio.vercel.app/"
                  target="_blank"
                >
                  🌐 Portfolio
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="https://satinderpoetry.com/"
                  target="_blank"
                >
                  ✍️ Poetry Website
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Search Google..."
                className="me-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <Button type="submit" variant="outline-primary">
                Search
              </Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Search Required</Modal.Title>
          </Modal.Header>

          <Modal.Body>Please enter something to search.</Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
