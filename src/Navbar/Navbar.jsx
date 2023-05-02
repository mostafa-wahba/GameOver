import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo (3).png";

function BasicExample({userData,logOut}) {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand to="/home">
          <Link className="text-white text-decoration-none" to="/home">
            <img
              alt=""
              src={logo}
              width="70"
              height="50"
              className="d-inline-block align-center text-white"
            />{" "}
            Game Over
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {userData?<Nav className="me-auto ms-4 text-white-50 main-nav">
            <NavLink className={({isActive})=> isActive ==true ?"text-white-50 custom-active":"text-white-50"} to="home">
              Home
            </NavLink>
            <NavLink className={({isActive})=> isActive ==true ?"text-white-50 custom-active":"text-white-50"} to="games">
              All
            </NavLink>
            <NavDropdown title="Platforms" id="basic-nav-dropdown">
              <NavLink  className={({isActive})=> isActive ==true ?"text-white-50 custom-active":"text-white-50"} to="platforms/pc">pc</NavLink>
              <NavLink className={({isActive})=> isActive ==true ?"text-white-50 custom-active":"text-white-50"} to="platforms/browser">Browser</NavLink>
            </NavDropdown>
            <NavDropdown title="Sort-by" id="basic-nav-dropdown">
              <NavLink className={({isActive})=> isActive ==true ?"text-white-50 custom-active":"text-white-50"} to="sortby/releasedate">
                Release Date
              </NavLink>
              <NavLink className={({isActive})=> isActive ==true ?"text-white-50 custom-active":"text-white-50"} to="sortby/popularity">Popularity</NavLink>
              <NavLink className={({isActive})=> isActive ==true ?"text-white-50 custom-active":"text-white-50"} to="sortby/alphabetical">
                Alphabetical
              </NavLink>
              <NavLink className={({isActive})=> isActive ==true ?"text-white-50 custom-active":"text-white-50"} to="sortby/relevance">Relevance</NavLink>
            </NavDropdown>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavLink className={({isActive})=> isActive ==true ?"text-white-50 custom-active":"text-white-50"} to="category/racing">Racing</NavLink>
              <NavLink className={({isActive})=> isActive ==true ?"text-white-50 custom-active":"text-white-50"} to="category/sports">Sports</NavLink>
              <NavLink className={({isActive})=> isActive ==true ?"text-white-50 custom-active":"text-white-50"} to="category/social">Social</NavLink>
              <NavLink className={({isActive})=> isActive ==true ?"text-white-50 custom-active":"text-white-50"} to="category/shooter">Shooter</NavLink>
              <NavLink className={({isActive})=> isActive ==true ?"text-white-50 custom-active":"text-white-50"} to="category/openworld">Open-World</NavLink>
              <NavLink className={({isActive})=> isActive ==true ?"text-white-50 custom-active":"text-white-50"} to="category/zombie">Zombie</NavLink>
              <NavLink className={({isActive})=> isActive ==true ?"text-white-50 custom-active":"text-white-50"} to="category/fantasy">Fantasy</NavLink>
              <NavLink className={({isActive})=> isActive ==true ?"text-white-50 custom-active":"text-white-50"} to="category/actionrpg">Action-RPG</NavLink>
              <NavLink className={({isActive})=> isActive ==true ?"text-white-50 custom-active":"text-white-50"} to="category/action">Action</NavLink>
              <NavLink className={({isActive})=> isActive ==true ?"text-white-50 custom-active":"text-white-50"} to="category/fight">Fight</NavLink>
              <NavLink className={({isActive})=> isActive ==true ?"text-white-50 custom-active":"text-white-50"} to="category/battleroyale">
                Battle-Royale
              </NavLink>
            </NavDropdown>
            </Nav>:""}
            {userData?<Link className="text-white-50 Join-Us" onClick={logOut} to="/">
              Log Out
            </Link>:<Nav className="ms-auto d-flex align-items-center">
            <Link className="text-white-50" to="/">
              Login
            </Link>
            <Link className="text-white-50 Join-Us" to="/register">
              Join Us
            </Link>
          </Nav>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
