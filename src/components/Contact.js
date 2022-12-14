import React from 'react';
// import '../style.css';

export default function App() {
  return (
    <section>
      <div className="title">
        <h1>Contact us</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          iusto molestias accusamus rem nobis est, et laborum harum doloremque
          nemo non, minima quos totam labore
        </p>
      </div>
      <div className="contact">
        <div className="contact-form">
          <form>
            <div className="row">
              <div className="input50">
                <input type="text" placeholder="First Name" />
              </div>
              <div className="input50">
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="row">
              <div className="input50">
                <input type="text" placeholder="Email" />
              </div>
              <div className="input50">
                <input type="text" placeholder="Subject" />
              </div>
            </div>
            <div className="row">
              <div className="input100">
                <textarea placeholder="Message" defaultValue={''} />
              </div>
            </div>
            <div className="row">
              <div className="input100">
                <input type="submit" defaultValue="Send" />
              </div>
            </div>
          </form>
        </div>
        <div className="contact-info">
          <div className="info-box">
            <img src="images/address.png" className="contact-icon" alt="" />
            <div className="details">
              <h4>Address</h4>
              <p>28 Neon Tower, New York City, USA</p>
            </div>
          </div>
          <div className="info-box">
            <img src="images/email.png" className="contact-icon" alt="" />
            <div className="details">
              <h4>Email</h4>
              <a href="mailto:anyone@example.com">anyone@example.com</a>
              <br />
              <a href="mailto:anyone@example.com">anyone@example.com</a>
            </div>
          </div>
          <div className="info-box">
            <img src="images/call.png" className="contact-icon" alt="" />
            <div className="details">
              <h4>Call</h4>
              <a href="tel:+19785555555">+1 978 555 5555</a>
              <br />
              <a href="tel:+19784444444">+1 978 555 4444</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
