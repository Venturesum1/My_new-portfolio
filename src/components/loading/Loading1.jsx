import React, { useRef, useEffect, useState } from 'react';
import Typed from 'typed.js';
import './loading.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const typedRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!loading) {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      document.body.classList.add('loaded');
      // Start Typed.js animation on the h1 element
      const typed = new Typed(typedRef.current, {
        strings: ['Web Developer ', 'Passionate','Good Learner', 'C++ developer','......','------','......','.----.','-=-=-=-=','.=-=-=-=','......','.//..//..','.-----.',':)','(:','.-=>','......','......','......','......','......','.----','......','.=-=-..','......','..=-=-..','......','......','-=-=','......','......','......','......','......','......','......','......',],
        typeSpeed: 50,
      });

      // Destroy Typed instance during cleanup to stop animation
      return () => {
        typed.destroy();
      };
    }
  }, [loading]);
 

  return (
    <div className="app">
      {loading ? (
        <div className="loading-container">
          <div className="wave">
            <span role="img" aria-label="Wave">
              (❁´◡`❁)(❁´◡`❁)
            </span>
          </div>
          <div className="loading-text">Loading...</div>
        </div>
      ) : (
        <div className="content">
          {/* Fixed h1 tag */}
          <h1 style={{ fontSize: '60px' }}>Hi, i am Soumyasis,</h1>
          {/* Typed.js animation container */}
          <span ref={typedRef} style={{ fontSize: '30px' }}></span>
        </div>
      )}
    </div>
  );
};

export default App;
