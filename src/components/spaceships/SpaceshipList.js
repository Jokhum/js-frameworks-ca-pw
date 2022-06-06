import { useState, useEffect } from "react";
import { API } from "../../constants/api";
import SpaceshipDetails from "./SpaceshipDetails";

function SpaceshipList() {
  const [spaceships, setSpaceships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API);

        if (response.ok) {
          const json = await response.json();

          setSpaceships(json.results);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong..</div>;
  }

  return (
    <>
      {spaceships.map(function (spaceship) {
        console.log(spaceship);
        const spaceshipId = spaceship.url.match(/\/([0-9]*)\/$/);
        const id = spaceshipId[1];

        return <SpaceshipDetails key={id} id={id} name={spaceship.name} model={spaceship.model} manufacturer={spaceship.manufacturer} cost={spaceship.cost_in_credits} />;
      })}
    </>
  );
}

export default SpaceshipList;
