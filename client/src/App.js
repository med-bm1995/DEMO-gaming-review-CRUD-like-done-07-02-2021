import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetch_all_post } from "../src/js/actions/postActions";
import { Navbar, NavbarBrand, Nav, NavbarText, Form } from "reactstrap";
import review_logo from "./review_logo.jpg";
import Posts from "./components/Posts/Posts";
import Post from "./components/Posts/Post//Post";
import Formm from "./components/Form/Form";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_all_post());
  }, []);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>

        <Nav className="mr-auto" navbar></Nav>
        <img
          src={review_logo}
          alt="review-logo"
          height="50"
          width="50"
          style={{ margin: "10px" }}
        />
        <NavbarText>Simple Text</NavbarText>
      </Navbar>

      <div style={{ display: "flex" }}>
        <Posts />
        <Formm />
      </div>
    </div>
  );
}

export default App;
