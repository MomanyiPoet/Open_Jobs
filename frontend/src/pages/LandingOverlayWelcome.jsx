import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function OverlayWelcome() {
  // Changing code dynamically
  const greetings = ["Hello", "Karibu"];
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000); // Change the text every 1 second

    const timeoutId = setTimeout(() => {
      clearInterval(interval);
      navigate('/home'); // Automatically navigate to the home page after 3 seconds
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, [navigate, greetings.length]);

  return (
    <div id="" className="fixed top-0 left-0 w-full min-h-screen bg-darky flex flex-col items-center justify-center z-50">
        <div className="font-normal text-white flex items-center justify-center">
            <span className="text-2xl mr-2"><i className="fa-solid fa-location-dot"></i> </span>
            <h1 className="text-4xl">{greetings[currentGreetingIndex]}</h1>
        </div>
    </div>
  )
}

export default OverlayWelcome;
