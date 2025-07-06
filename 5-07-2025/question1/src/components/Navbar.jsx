import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ marginBottom: '20px' }}>
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
    </nav>
  );
}
