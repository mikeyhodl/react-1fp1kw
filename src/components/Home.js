import React from 'react';
// import '../style.css';

export default function App() {
  return (
    <section className="home">
      <img src="images/home-img.jpg" className="home-img" alt="" />
      <div className="home-content">
        <h1>
          We help to achieve <br />
          your goals.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo itaque
          nam saepe vero voluptatem vel fuga a eaque earum alias ipsam
          aspernatur culpa maxime laboriosam, impedit quae officiis consectetur
        </p>
        <a href="contact.html" className="btn">
          Get Started
        </a>
      </div>
    </section>
  );
}
