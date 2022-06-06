import React from "react";
import SpaceshipList from "../spaceships/SpaceshipList";
import Heading from "../Heading";

function Home() {
  return (
    <>
      <div className="wrapper">
        <Heading title="Homepage" />
        <section className="spaceship-list">
          <SpaceshipList />
        </section>
      </div>
    </>
  );
}

export default Home;
