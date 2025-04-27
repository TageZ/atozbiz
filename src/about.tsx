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
                    <span className="about-text">Amber Zerby is the Founder and Principal of AtoZ Business Solutions. With over 20 years of experience in accounting, operations, and executive support, Amber brings a deep understanding of business fundamentals and a commitment to excellence in every engagement.</span>
                    <span className="about-text">She earned her Bachelor of Science in Accounting from North Park University in Chicago in 1999 and has since built a career rooted in precision, trust, and operational leadership. In 2022, Amber launched AtoZ Business Solutions to provide high-level support to executives and organizations needing reliable, confidential, and agile assistance across key business functions.</span>
                    <span className="about-text">A lifelong resident of the Chicago area, Amber currently resides in Saint Charles, IL with her husband. She is also a proud mother of two young adult sons.</span>
                </div>
            </div>
        </div>
    )
}

export default About;