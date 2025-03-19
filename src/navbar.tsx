import { Link } from 'react-router-dom';
import logo from './assets/AtoZ_Logo.png';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
                <div className="header-info">
                    <div className="location">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>St. Charles, IL</span>
                    </div>
                    <div className="phone">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>630-817-5014</span>
                    </div>
                </div>
                <img className="logo" src={logo} alt="Logo" />
                <div className="header-info">
                    <div className="linked-in">
                        <FontAwesomeIcon icon={faLinkedin} />
                        <span>A to Z Business Solutions, LLC</span>
                    </div>
                </div>
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
