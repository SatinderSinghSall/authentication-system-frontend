import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <Container>
        <div className="text-center mb-3">
          <h5 className="fw-bold mb-1">🔐 Authentication System</h5>

          <p className="text-secondary mb-0">
            Built with React, Bootstrap & Node.js
          </p>
        </div>

        <Nav className="justify-content-center mb-3">
          <Nav.Link href="/" className="text-light">
            Home
          </Nav.Link>

          <Nav.Link href="/login" className="text-light">
            Login
          </Nav.Link>

          <Nav.Link href="/register" className="text-light">
            Register
          </Nav.Link>

          <Nav.Link
            href="https://satinder-portfolio.vercel.app/"
            target="_blank"
            className="text-light"
          >
            Portfolio
          </Nav.Link>

          <Nav.Link
            href="https://satinderpoetry.com/"
            target="_blank"
            className="text-light"
          >
            Poetry
          </Nav.Link>

          <Nav.Link
            href="https://github.com/SatinderSinghSall"
            target="_blank"
            className="text-light"
          >
            GitHub
          </Nav.Link>
        </Nav>

        <hr className="border-secondary" />

        <p className="text-center text-secondary mb-0">
          © {year} Satinder Singh Sall. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
