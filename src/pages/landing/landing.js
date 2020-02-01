import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/button/button';
import SearchContainer from '../../containers/searchContainer/searchContainer';
import ImageElement from '../../components/image/image';
import Form from '../../components/form/form';
import Input from '../../components/input/input';
import '../pages.css';
import './landing.css';
import Footer from '../../components/footer/footer';

const Landing = () => {
  return (
    <>
    <div className="page page__landing">
      <SearchContainer content={
        <>
          <ImageElement className={"logo"} alt={"Wolt company logo"} src={require("../../resources/images/woltLogo.png")} />
          <h3>How about some doughnuts?</h3>
          <Form className={"search__form"} content={
            <>
              <ImageElement alt={"Geolocation logo"} src={require("../../resources/images/placeholder.png")} />
              <label for="input__landing">Where do you want it delivered?</label>
              {/* Since the database only has 50 restaurants from Helsinki, this has no unique API yet to check for cities */}
              <Input type={"text"} name={"input__landing"} placeholder={"Type your address..."} />
              <NavLink exact to="/results">
                <Button aria-label="Navigation link" text={"SEARCH FOR RESTAURANTS"} />
              </NavLink>
            </>
          }/>
        </>
      }/>
    </div>
    <Footer 
      titleLeft={"About"} 
      textLeft={"This little project was made to practice the full spectrum of my skills in the span of a week. Design, front and back. It imitates the wonderful Wolt application as creating those functionalities is a good and fun way of honing my skills. Besides, in a world full of NDA's, you need to have something to show!"} 
      titleRight={"Contact me"} 
      imgGit={
        <ImageElement className={"footer__contact"} alt={"Github logo"} src={require("../../resources/images/github.png")} />
      }
      imgLink={
        <ImageElement className={"footer__contact"} alt={"Linkedin logo"} src={require("../../resources/images/linkedin.png")} />
      }
      linkFirst={'https://github.com/PetraSil'}
      linkSecond={'https://www.linkedin.com/in/petrasilavuori'}
    />
    </>
  );
};

export default Landing;
