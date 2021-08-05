import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="title">Wave</h1>
    </div>
    <div>
      <Link to="/" className="route-link">
        Home
      </Link>
      <Link to="/about" className="route-link">
        About
      </Link>
      <Link to="/contact" className="route-link">
        Contact
      </Link>
    </div>
  </nav>
)

export default Header
