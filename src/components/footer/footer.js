import React from 'react';
import './footer.css';
const { Links } = require('../../utils/links');

const Footer = ({ titleLeft, textLeft, titleRight, linkGit, linkLink, event }) => {
  return (
    <div className="footer__wrapper">
      <section className="footer__left">
        <h1>{titleLeft}</h1>
        <p>{textLeft}</p>
      </section>
      <section className="footer__right">
        <h1>{titleRight}</h1>
        <div className="footer__right_links">
          <a name="git" onClick={(e) => Links(e)}>{linkGit}</a>
          <a name="linkedin" onClick={(e) => Links(e)}>{linkLink}</a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
