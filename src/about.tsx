import './about.scss';
import headshot from './assets/az-headshot.jpg';

function About(){

    return (
        <div className="page-wrapper">
            <div className="about-grid">
                <div className='text-wrapper-1'><span className="about-text">A to Z Business Solutions provides high-level business support with integrity, discretion, and efficiency. </span></div>
                <div className='text-wrapper-2'><span className="about-text">Trusted by executives and business leaders, we handle critical operations, including C-suite communications, payroll, HR matters, and banking transactions.</span></div>
                <div className='text-wrapper-3'><span className="about-text">Our expertise ensures seamless coordination, clear communication, and organized workflows, even outside standard business hours. </span></div>
            </div>

            <div className="about-container">
                <div className="image-container">
                    <img className="image" src={headshot}/>
                </div>

                <div className="about-text-container">
                    <span className="about-title">About the Founder</span>
                    <span className="about-text">The Principal/CEO of A to Z Business Solutions is Amber Zerby. She graduated from North Park University in Chicago in 1999 with a Bachelor of Science (BS) in Accounting.</span>
                    <span className="about-text">Amber has over two decades of experience in the business world and founded A to Z Business Solutions in 2022.</span>
                    <span className="about-text">She has lived in the Chicago area her whole life, and currently lives in Saint Charles, IL with her husband. She also has two children who are both in college.</span>
                </div>
            </div>
        </div>
    )
}

export default About;