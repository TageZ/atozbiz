import './styles.scss';

function Services(){

    const services = [
        {"header": "🛎️ On-Call Liaison Services", "body": "Acting as your dedicated point of contact, we coordinate responses, relay updates, and ensure everyone stays aligned—even outside standard hours."},
        {"header": "🗓️ Scheduling & Coordination", "body": "From complex calendar management to executive travel planning and events, we streamline your schedule so you stay focused on what matters."},
        {"header": "📬 Business Communication Management", "body": "We manage high-volume communications with precision and professionalism—email, phone, and document workflows—all handled with confidentiality."},
        {"header": "🗂️ Administrative & Project Support", "body": "We support internal operations, help execute projects, and implement tools and systems to enhance your workflow."},
        {"header": "🧑‍💼 Executive Support", "body": "Handling C-level priorities with trust and discretion—payroll processing, HR documentation, vendor payments, and banking coordination."},
    ]

    const specialties: string[] = [
        "Forensic Accounting",
        "Auditing",
        "Revenue Operations",
        "Business Intelligence Projects",
        "Human Resources (HR)",
        "Non-Profit Accounting",
        "Private Equity",
        "Mergers & Acquisitions (M&A)",
        "E-commerce",
        "Organizational Leadership"
    ];

    const tools = [
        { name: "QuickBooks Online", color: "#2CA01C" },
        { name: "Salesforce Lightning", color: "#00A1E0" },
        { name: "HubSpot", color: "#FF7A59" },
        { name: "Gusto", color: "#E31837" },
        { name: "Paychex", color: "#003F71" },
        { name: "MailerLite", color: "#1FB141" },
        { name: "Apollo.io", color: "#473BF0" },
        { name: "hellosign", color: "#0E99DA" },
        { name: "qwilr", color: "#3C4251" },
        { name: "Google Workspace", color: "#4285F4" },
        { name: "Microsoft Office/Excel", color: "#217346" },
        { name: "SQL", color: "#CC2927" },
        { name: "monday.com", color: "#FFCC00" },
        { name: "DocuSign", color: "#FCBC00" },
        { name: "Eventbrite", color: "#F6682F" },
        { name: "SalesLoft", color: "#4A154B" },
        { name: "WordPress", color: "#21759B" },
        { name: "MailChimp", color: "#FFE01B" }
      ];

    return (
        <div className="services-wrapper">
            <div className="services-grid">
                {services.map((service, i) => (
                    <div className="service" key={i}>
                        <h2 className="service-header">
                            {service.header}
                        </h2>
                        <span className='service-body'>
                            {service.body}
                        </span>
                    </div>
                ))}
            </div>
            <div className="specialties-tools-box">
                <div className="specialties">
                    <h2 className="specialties-header">Specialty Expertise</h2>
                    <ul className="specialties-list">
                        {specialties.map((specialty, i) => (
                            <li className="specialty" key={i}><span style={{color: "#3A6EA5"}}>➔ </span>{specialty}</li>
                        ))}
                    </ul>
                </div>
                <div className="tools-box">
                    <div className="tools-wrapper">
                        <div className="tools-header-container">
                            <h2 className="tools-header">Platform Proficiency</h2>
                            <span className="tools-text">We work confidently across a range of platforms and systems, including:</span>
                        </div>

                        <div className="tools-grid">
                            {tools.map((tool, i) => (
                                <div className="tool" key={i} style={{backgroundColor: tool.color}}><span className="tool-name">{tool.name}</span></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;