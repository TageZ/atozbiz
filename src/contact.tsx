import './contact.scss';

function Contact() {
    return (
        <div className="contact-form-container">
            <iframe 
                className="contact-frame"
                src="https://docs.google.com/forms/d/e/1FAIpQLSdVIhiL2rFbfpHC-SBI_zmtNsZ4-FvI6F4-8nnnpXvTfIg_aQ/viewform?embedded=true"
                width="100%" 
                height="2000px" 
                frameBorder="0"
                marginHeight={0} 
                marginWidth={0}>
                Loading…
            </iframe>
        </div>
    );
}

export default Contact;
