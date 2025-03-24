import React, { useEffect } from "react";
import "../style/home.css";

const Home = () => {
  useEffect(() => {
    document.body.classList.add("home-bg");
    return () => {
      document.body.classList.remove("home-bg");
    };
  }, []);

  return (
    <>
      <div className="home-head">
        <h3>Hello, I'm</h3>
        <h1>MUHAMMED</h1>
        <h2>JASIM</h2>
        <p>FULL STACK DEVELOPER</p>
      </div>
      <div className="med">
         <div className="face">
        <a href="https://www.facebook.com/share/19xbBagwXY/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
      </div>

      <div className="whats">
        <a href=" https://wa.me/+918921252868" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
      </div>

      <div className="insta">
        <a href="https://www.instagram.com/_mhd.jasim__/" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>

      <div className="tel">
        <a href="https://www.linkedin.com/in/muhammed-jasim-837a84333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-linkedin-in"></i>
      </a>
      </div>
      </div>
     
      


    </>
  );
};

export default Home;


