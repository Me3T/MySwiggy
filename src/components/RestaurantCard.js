import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, rating, time } = resData;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + resData.image} alt="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{rating} stars</h4>
      <h4>{time} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
