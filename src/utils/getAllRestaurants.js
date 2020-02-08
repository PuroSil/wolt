import axios from 'axios';
import lodash from 'lodash';

export const getAllRestaurants = async (setter) => {
  const response = await axios.get('http://localhost:8080/api/getAllRestaurants');
  setter(lodash.sortBy(response.data, ['name']));
};
