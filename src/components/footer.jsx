import React, { useState, useEffect } from 'react';

export const Footer = (props) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; {currentYear} Dream Homes
          </p>
        </div>
      </div>
    </div>
  );
};
