import { Link } from "react-router-dom";
import { Container } from "../styles/Container.styled";
import { List, ListItemLeft, ListItemRight, Nav } from "./Navbar.styled";

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <List>
          <ListItemLeft>
            <Link to="/">Linkhub</Link>
          </ListItemLeft>
          <ListItemRight className="flex gap-4">
            <Link
              to="/login"
              className="border border-violet-500 border-solid text-violet-500 p-2 px-6"
            >
              Login
            </Link>
            <Link to="/signup" className="bg-violet-500 text-white p-2 px-6">
              Sign up
            </Link>
          </ListItemRight>
        </List>
      </Container>
    </Nav>
  );
};

export default Navbar;
