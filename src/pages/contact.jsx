import React, { useEffect, useState } from "react";
import "../style/contact.css";

const Contact = () => {
  useEffect(() => {
    document.body.classList.add("contact-bg");

    return () => {
      document.body.classList.remove("contact-bg");
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: ""
  });

  const handleChange = (e) => {
    if (e.target.name === "phone" && isNaN(e.target.value)) {
      return;
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <>
      <div className="contact-header">
        <h1>CONTACT ME</h1>
      </div>
      <div className="contact-form">
        <div className="media">
          <div className="drop-me">
            <h1>Drop Me a Message</h1>
            <p>Have a project in mind or need a reliable developer to<br />
              bring your idea to life? Let's chat! Drop me a message <br />
              and I'll get back to you soon </p>
            <div className="phone">
              <i class="fa-solid fa-phone"></i><span>+918921252868</span>
            </div>

            <div className="message">
              <i class="fa-solid fa-envelope"></i><span>jasimp412@gmail.com</span>
            </div>

            <div className="location">
              <i class="fa-solid fa-location-dot"></i><span>Parappan house kattapara mampad <br />college (po) malappuram,kerala 676542</span>
            </div>
          </div>

          <div className="follow">
            <div className="follow-me">
              <h1>Follow <br />Me</h1>
            </div>

            <div className="facebook">
              <a href="https://www.facebook.com/share/19xbBagwXY/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>

            <div className="whatsapp">
              <a href=" https://wa.me/+918921252868" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
            </div>

            <div className="instagram">
              <a href="https://www.instagram.com/_mhd.jasim__/" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>

            <div className="telegram">
              <a href="https://www.linkedin.com/in/muhammed-jasim-837a84333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-body">
          <div className="contact-name">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
          <div className="contact-email">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="contact-phone">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              onKeyPress={(e) => {
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              pattern="[0-9]*"
              inputMode="numeric"
              maxLength="10"
            />
          </div>

          <div className="contact-message">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
            />
          </div>
          <button onClick={handleSubmit}>Send</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
