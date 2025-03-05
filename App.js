import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Restaurant Container
 *   - Restaurant Card
 * Footer
 * - Copy Right
 * - Links
 * - Address
 * - Contact
 */

const resObj = [
  {
    name: "Pizza Hut",
    image:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/57dcac8c-db09-4aec-9893-b7a60abc5669_119514.jpg",
    rating: 4.1,
    cuisines: ["Pizza", "Fast Food"],
    time: "20-25 mins",
  },
  {
    name: "Khatu Ji Vaishnu Dhaba",
    image: "oshmkqy9evxn4v8zaapc",
    rating: 4.6,
    cuisines: ["North Indian", "South Indian"],
    time: "15-20 mins",
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg?w=900"
          alt="app_logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, rating, time } = resData;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.image
        }
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{rating} stars</h4>
      <h4>{time} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantCard resData={resObj[0]} />
      
        <RestaurantCard resData={resObj[1]} /> */}
        {resObj.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
