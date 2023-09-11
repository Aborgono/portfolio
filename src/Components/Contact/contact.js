import React from 'react';
import './contact.css';
import linkedIn from '../../data/images/linkedIn.png';
import git from '../../data/images/Git-Icon-1788C.png';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Let's Connect!</h1>
      <div>
        <p>
          I'm looking to collaborate on innovative software projects that tackle real-world challenges and push the boundaries of what's possible.
        </p>
        <div>
          <a href="">Here's my email</a>
          <a href="">Download my resume</a>
          <div>
            Socials
            <a href="https://www.linkedin.com/in/alberto-borgonovo/">
              <img className="social-image" src={linkedIn} alt="LinkedIn" />
            </a>
            <a href="https://github.com/Aborgono">
              <img className="social-image" src={git} alt="Git" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
