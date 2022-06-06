import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../../constants/api";
import axios from "axios";

export default function SpaceshipPage() {
  const [spaceship, setSpaceship] = useState([]);

  let history = useNavigate();

  const { id } = useParams();

  if (!id) {
    history.push("/");
  }

  const url = API + id;

  useEffect(
    function () {
      async function fetchSpaceship() {
        try {
          const response = await axios.get(url);
          setSpaceship(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchSpaceship();
    },
    [url]
  );
  const { name, model, manufacturer, cost_in_credits } = spaceship;

  return (
    <div className="wrapper">
      <div className="spaceship-details">
        <h1>The {name}</h1>
        <p>
          Is a <span className="bold">{model}</span> spaceship model and was originally designed and manufactured by <span className="bold">{manufacturer}</span>.
        </p>
        <p>
          Too purchase and get a <span className="bold">{name}</span> of your own, you will have too cough up an overwhelming <span className="bold">{cost_in_credits}</span> credits.
        </p>
      </div>
    </div>
  );
}
