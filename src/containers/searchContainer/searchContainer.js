import React from 'react';
import './searchContainer.css';
import '../../components/input/input.css';

const SearchContainer = ({ content }) => {
  return (
    <section className="container container__search">
      { content }
    </section>
  );
};

export default SearchContainer;
