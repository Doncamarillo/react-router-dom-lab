import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/mailboxes">Mailboxes</Link>
    <Link to="/new-mailbox">New Mailbox</Link>
  </nav>
);

export default NavBar;
