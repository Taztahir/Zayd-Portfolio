import { div } from "framer-motion/client";


function Map(){
    return(
        <div style={{ width: "100%", height: "400px" }}>
            <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.0079625608964!2d3.3971547744806987!3d6.550340822851908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d41fb422515%3A0x3899ecd9fa687a8!2s42%20Oworo%20Rd%2C%20Oworosoki%2C%20Oworonshoki%20105102%2C%20Lagos!5e1!3m2!1sen!2sng!4v1755064220926!5m2!1sen!2sng"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
        </div>
    )
}
export default Map;