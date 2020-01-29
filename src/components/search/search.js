import React, { useState, useContext } from 'react';
import axios from 'axios';
import Button from '../button/button';
import { RestaurantContext } from '../../context/restaurantContext';
import Input from '../input/input';
import Form from '../form/form';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const { restaurantsList, setRestaurantsList } = useContext(RestaurantContext);

  //Allow the search for restaurants with given parameters
  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(`http://localhost:8000/api/getRestaurantsByName?name=${searchValue}`);
    setRestaurantsList(response.data)
    setInputValue('');
  }; 

  const onChange = (e) => {
    const { value } = e.target;
    setInputValue(value)
  }

  return (
    <Form onSubmit={onSubmit} className={"search__form"} content={
      <>
        <Input 
          type={"text"} 
          value={inputValue} 
          placeholder={"Search..."} 
          change={onChange} 
          event={e => setSearchValue(e.target.value)}
          className={"search__input"}
        />
        <Button 
          type={"submit"} 
          text={"SEARCH"} 
          className={"search__button"}
        />
      </>
    }/>
  );
};

export default Search;