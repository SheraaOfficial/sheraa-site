
import React from 'react';
import { Map } from 'lucide-react';

const LocationMap = () => {
  return (
    <div className="rounded-xl overflow-hidden h-[400px] shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.2714799777614!2d55.53889631501241!3d25.287673983854937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c3cf2462dbb%3A0x950298ae1f1d2c3f!2sSharjah%20Research%20Technology%20and%20Innovation%20Park!5e0!3m2!1sen!2sae!4v1627900000000!5m2!1sen!2sae"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
        title="Sheraa Location Map"
      />
    </div>
  );
};

export default LocationMap;
