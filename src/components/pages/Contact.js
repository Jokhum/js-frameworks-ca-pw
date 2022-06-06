import React from "react";
import Heading from "../Heading";
import ContactForm from "./Contact/ContactForm";

function Home() {
  return (
    <>
      <div className="wrapper">
        <Heading title="Contact Page" />
        <ContactForm />
      </div>
    </>
  );
}

export default Home;
