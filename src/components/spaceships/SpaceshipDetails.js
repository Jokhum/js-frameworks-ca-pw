import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SpaceshipDetails({ name, manufacturer, cost, id }) {
  return (
    <Link to={`detail/${id}`}>
      <div className="spaceship-card">
        <h2>{name}</h2>
        <p>Made by: {manufacturer}</p>
        <p className="pricetag">Price of starship: {cost} credits.</p>
      </div>
    </Link>
  );
}

SpaceshipDetails.propTypes = {
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  cost: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default SpaceshipDetails;
