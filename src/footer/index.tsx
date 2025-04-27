import './styles.scss';
import logo from '../assets/transparent.png';
import { FaLinkedin } from "react-icons/fa";

function Footer(){

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="top-container">
                        <div className="left-container">
                            <img className="logo" src={logo}/>
                            <a
                                className='social-button' 
                                href="https://www.linkedin.com/company/a-to-z-business-solutions-llc/"
                                target="_blank"
                            >
                                <FaLinkedin/>
                            </a>
                        </div>
                        <div className="contact-info">
                            <span className='title'>
                                Contact
                            </span>
                            
                            <a className='info'>
                                <span>Phone: (630) 817-5014</span>
                                <span>Email: amber@atozbiz.net</span>
                                <span>Use the contact form or schedule a consultation</span>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="divider"/>
                <div className="footer-bottom">
                    <span>© A to Z Business Solutions 2025 | All rights reserved</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;