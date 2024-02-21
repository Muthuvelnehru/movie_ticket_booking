import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./homepage/images/logo.png";
import { useNavigate } from "react-router";
import { Link as scrolllink, animateScroll as scroll } from "react-scroll";
import "../src/navbarcss.css";
function BasicExample() {
  const navigate = useNavigate();
  return (
    <>
    <Navbar
        expand="lg"
        style={{ backgroundColor: "#061852", height: "80px" }}
        className="fixed-top w-100 "
      >
        <Container style={{marginLeft:"5%"}}>
          <Navbar.Brand>
            <img src={logo} style={{ height: 45, width: 100 }} alt="logo" />
            <h1 className="theatername mt-3 mb-3">Film Roll</h1>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ color: "transparent" }}
            className="burgersymbol"
          />
          
          <Navbar.Collapse id="basic-navbar-nav" className="p-1">
            <Nav
              className="mr-auto w-100 p-2"
              style={{ backgroundColor: "#061852" }}
            >
              <Nav.Link
                as={scrolllink}
                to="hom"
                smooth={true}
                duration={100}
                onClick={() => navigate("/")}
                style={{
                  color: "white",
                  fontSize: "larger",
                  fontWeight: "bold",
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={scrolllink}
                to="mov"
                smooth={true}
                duration={100}
                style={{ color: "white", fontSize: "larger" }}
              >
                Movies
              </Nav.Link>
              <Nav.Link
                href="#home"
                onClick={() => navigate("/about")}
                style={{ color: "white", fontSize: "larger" }}
              >
                About us
              </Nav.Link>
              <Nav.Link
                as={scrolllink}
                to="con"
                smooth={true}
                duration={100}
                style={{ color: "white", fontSize: "larger" }}
              >
                Contact us
              </Nav.Link>

              <div className="p-2">
                <button className="button1" onClick={() => navigate("/signin")}>
                  Signin
                </button>
              </div>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;