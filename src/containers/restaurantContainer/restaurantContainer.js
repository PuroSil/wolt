import ImageElement from '../../components/image/image';

const RestaurantContainer = ({ imgUrl }) => {
  return (
    <div>
      <ImageElement src={imgUrl} />
    </div>
  );
};

export default RestaurantContainer;
