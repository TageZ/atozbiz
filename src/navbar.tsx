import { Link } from 'react-router-dom';
import logo from './assets/AtoZ_Logo.png';
import './navbar.scss';

function Navbar() {
    const options = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
        { name: 'Book a Consultation', path: '/consultation' }
    ];

    return (
        <div className="navbar">
            <div className="header-box">
                <img className="logo" src={logo} alt="Logo" />
            </div>
            <div className="links-box">
                <hr style={{ width: '100%', margin: '0' }} />
                <ul className="links">
                    {options.map((option, i) => (
                        <li className="link" key={i}>
                            <Link className="link-container" to={option.path}>
                                <span className="link-text">{option.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <hr style={{ width: '100%', margin: '0' }} />
            </div>
        </div>
    );
}

export default Navbar;
