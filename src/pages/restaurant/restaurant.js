import React, { useContext } from 'react';
import ImageElement from '../../components/image/image';
import { NavLink } from 'react-router-dom';
import { SelectedResContext } from '../../context/selectedResContext';
import Button from '../../components/button/button';
import './restaurant.css';
import MenuItem from '../../components/menuItem/menuItem';
import defaultBg from '../../resources/images/bread.jpg';
//The restaurant page will mostly just be a static page
//as I lack dynamic data and menus, this is merely a 
//here to give an idea of the layout
const Restaurant = () => {
  const { selectedRes } = useContext(SelectedResContext);

  const scrollToId = (target) => {
    const element = document.getElementById(target);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  
  return (
    <div className="page page__restaurant">
      <section className="page__restaurant_upper" style={
        {backgroundImage: !selectedRes.image ? `url(${defaultBg})` : 
        `url(${selectedRes.image})`}
      }>
        <div className="black__overlay">
          <section className="page__restaurant_upper_content">
            <NavLink exact to="/" activeClassName="active">
              <ImageElement className={"logo"} alt={"Wolt company logo"} src={require("../../resources/images/woltWhite.png")} />
            </NavLink>
            <h1>{!selectedRes.name ? "Restaurant Name" : selectedRes.name}</h1>
            <h2>Delivery hours:</h2>
            <div className="page__restaurant_hours">
              <span>Mon - Fri</span>
              <span>10 - 18</span>
            </div>
            <div className="page__restaurant_hours">
              <span>Sat - Sun</span>
              <span>10 - 16</span>
            </div>
            <h3>Average delivery time today: 22 min</h3>
            <div className="page__restaurant_upper_tags">
              {selectedRes && selectedRes.tags && selectedRes.tags.map((entry) => {
                return(
                  entry.map((tag) => {
                    return(
                      <h4 key={tag}>{tag}</h4>
                    );
                  })
                );
              })}
            </div>
          </section>
        </div>
      </section>
      <section className="page__restaurant_lower">
        <section className="page__restaurant_lower_left">
          <h3>
          A placeholder intro text for a restaurant as my database does not have real intro texts or menus. 
          It would include a basic information about the restaurant and the type of food offered and some 
          fluff text to further raise the interest of a potential customer and give a brief overview.
          </h3>
          <h2 className="page__restaurant_category_title" id="category__one">Category one</h2>
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <h2 className="page__restaurant_category_title" id="category__two">Category two</h2>
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <h2 className="page__restaurant_category_title" id="category__three">Category three</h2>
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </section>
        <section className="page__restaurant_lower_right">
          <h2>Open Today:</h2>
          <div className="page__restaurant_hours">
              <span>10:30 - 18:00</span>
            </div>
            <h2>Shopping Cart:</h2>
            <div className="page__restaurant_lower_right_shop">
              <ImageElement alt={"Shopping cart icon"} src={require("../../resources/images/smart-cart.png")} />
              <h3>0 ITEMS</h3>
            </div>
            <Button text={"ORDER"}/>
            <h2 className="page__restaurant_lower_right_categories">Menu categories:</h2>
            <ul>
              <li onClick={() => scrollToId("category__one")}>Category One Link</li>
              <li onClick={() => scrollToId("category__two")}>Category Two Link</li>
              <li onClick={() => scrollToId("category__three")}>Category Three Link</li>
            </ul>
        </section>
      </section>
    </div>
  );
};

export default Restaurant;
