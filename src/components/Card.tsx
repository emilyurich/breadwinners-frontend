import "./Card.css";
import Toast404 from "../assets/Toast404.png";
import { Link } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Job from "../models/Job";

interface Props {
  jobProp: Job;
}

const Card = ({ jobProp }: Props) => {
  const { addFavoriteHandler, deleteFavoriteHandler, isFav } =
    useContext(FavoritesContext);
  const { profile, user } = useContext(AuthContext);

  return (
    <li className="Card">
      <div className="ToastContainer">
        <div className="Toast">
          {jobProp?.employer_logo ? (
            <Link to={`/jobs/${jobProp?.job_id}`}>
              <img
                className="Logo"
                src={jobProp?.employer_logo}
                alt={jobProp?.job_title}
              />
            </Link>
          ) : (
            <img className="Logo fourOhFour" src={Toast404} alt="not found" />
          )}
          <h3>{jobProp?.employer_name}</h3>
          <Link to={`/jobs/${jobProp?.job_id}`}>
            <h4>{jobProp?.job_title}</h4>
          </Link>

          <h4>
            {jobProp?.job_city} {jobProp?.job_state}
          </h4>
          <Link to={`/jobs/${jobProp?.job_id}`}>
            <h4>{jobProp?.job_description.slice(0, 500)} ...</h4>
          </Link>

          {profile &&
            (isFav(jobProp?.job_id) ? (
              <button onClick={() => deleteFavoriteHandler(jobProp?.job_id)}>
                Delete Favorite
              </button>
            ) : null)}
        </div>
      </div>
    </li>
  );
};

export default Card;
