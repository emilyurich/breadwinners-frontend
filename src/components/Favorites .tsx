import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import FavoritesContext from "../context/FavoritesContext";
import Card from "./Card";
import "./Favorites.css";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  const { user } = useContext(AuthContext);
  return (
    <div className="Favorite">
      {user ? (
        <ul>
          {favorites.map((item) => (
            <Card jobProp={item.job} key={item._id} />
          ))}
        </ul>
      ) : (
        <p>Your Bread Bank</p>
      )}
    </div>
  );
};

export default Favorites;