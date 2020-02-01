import React from 'react';
import './footer.css';

const Footer = ({ titleLeft, textLeft, titleRight, imgGit, imgLink, linkFirst, linkSecond }) => {
  return (
    <div className="footer__wrapper">
      <section className="footer__left">
        <h1>{titleLeft}</h1>
        <p>{textLeft}</p>
      </section>
      <section className="footer__right">
        <h1>{titleRight}</h1>
        <div className="footer__right_links">
          <a href={linkFirst} name="git">{imgGit}</a>
          <a href={linkSecond} name="linkedin">{imgLink}</a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
