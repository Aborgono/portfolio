import React from 'react';
import './contact.css';
import linkedIn from '../../data/images/linkedIn.png';
import git from '../../data/images/Git-Icon-1788C.png';

function Contact() {
  return (
    <div id='contact' className="contact-container">
      <h1>Let's Connect!</h1>
      <div className='contact-box'>
        <p>
          I'm looking to collaborate on innovative software projects that tackle real-world challenges and push the boundaries of what's possible.
        </p>
        <div className='socials-box'>
          <a href="mailto:albertoiborgonovo@gmail.com">Email me here</a>
          <a href='/Resume Alberto Borgonovo 2023 VF.pdf' download="Resume Alberto Borgonovo 2023 VF.pdf">Download my resume</a>
          <div className='socials-box2'>
            <p>
              Socials
            </p>
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
