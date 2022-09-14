import React from "react";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { logout } from "../../actions/userActions";
import brandlogo from "../../assets/images/logo/acme-widgets.png";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useLocation } from "react-router-dom";

import { ethers } from "ethers";

const brand = {
  width: "100%",
  height: "auto",
  maxWidth: "170px",
};

const navbar = {
  border: "none",
  outline: "none",
  background: "transparent",
};

const dark = { color: "black" };

const connectWallet = async () => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    if (provider) {
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      return {
        address,
      };
    } else {
      return {
        error: "Please install Metamask at https://metamask.io",
      };
    }
  } catch (error) {
    return {
      error: "An unexpected error occurs",
    };
  }
};

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar style={navbar} expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={brandlogo} alt="Logo" style={brand} />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={dark}>
            <AiOutlineMenuUnfold />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            {location.pathname === "/" && (
              <Nav className="ms-auto page-links">
                <a href="#home">
                  <span>Home</span>
                </a>
                <a href="#features">
                  <span>Features</span>
                </a>
                <a href="#buy">
                  <span>Buy Widgets</span>
                </a>
                <a href="#testimonials">
                  <span>Testimonials</span>
                </a>
              </Nav>
            )}
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart" style={dark} />{" "}
                  <span style={dark}>CART</span>
                </Nav.Link>
              </LinkContainer>

              <Nav.Link onClick={connectWallet}>
                <i className="fas fa-wallet" style={dark} />{" "}
                <span style={dark}>CONNECT WALLET</span>
              </Nav.Link>

              {userInfo && (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>PROFILE</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    LOGOUT
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>USERS</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>PRODUCTS</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>ORDERS</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
