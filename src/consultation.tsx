import { useEffect, useRef } from "react";

function Consultation() {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={calendlyRef}
      className="calendly-inline-widget"
      data-url="https://calendly.com/amber-atozbiz/30min"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
};


export default Consultation;