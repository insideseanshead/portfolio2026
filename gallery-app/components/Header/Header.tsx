import './Header.css';
import Navbar from '../Navbar/Navbar';

export default function Header() {
  return (
    <header>
      <Navbar />
      <div className="container hero-content">
        <h1>Inside Sean's Head</h1>
        <p>From my brain to you'r sight balls!</p>
      </div>
    </header>
  );
}
