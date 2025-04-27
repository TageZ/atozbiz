import './styles.scss'
import logo from '../assets/transparent.png'

function Home(){

    return (
        <div className="page" aria-label="home">
            <div className="home-container">
                <div className="logo-motto-container">
                    <img src={logo} className='logo'/>
                    <div className="motto-container">
                        <span className="motto">Catalyzing Success:</span>
                        <span className="motto">Your Business, Our Support</span>
                    </div>
                </div>
            </div>
            <div className="overview-container">
                <h2 className="overview-header">What We Do Best:</h2>
                <ul className="overview-list">
                    <li className="overview-list-point"><span style={{color: "#3A6EA5"}}>➔ </span>Serve as your on-call liaison to ensure critical messages are relayed and responses are aligned</li>
                    <li className="overview-list-point"><span style={{color: "#3A6EA5"}}>➔ </span>Manage executive calendars, coordinate meetings, and streamline event planning</li>
                    <li className="overview-list-point"><span style={{color: "#3A6EA5"}}>➔ </span>Oversee secure and professional communication—email, phone, or document-based</li>
                    <li className="overview-list-point"><span style={{color: "#3A6EA5"}}>➔ </span>Provide administrative and project support to keep your business moving forward</li>
                    <li className="overview-list-point"><span style={{color: "#3A6EA5"}}>➔ </span>Handle sensitive tasks like payroll processing, HR compliance, and banking activities with complete confidentiality</li>
                </ul>
            </div>
        </div>
    )
}

export default Home