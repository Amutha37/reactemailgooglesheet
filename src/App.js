import React from "react";

import Feedback from "./components/Feedback";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import "./App.css";

export default function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        <a href="https://docs.google.com/spreadsheets/d/11g-qe4LVFPSeOGXtBQpvEHS8I5kiKeqCwg4o9xh1a6g/edit#gid=661169676">
          Sheets View
        </a>
      </h1>
      <div className="App">
        <div className="contact-form form">
          <h1>Feedback Form</h1>
          <Feedback />
        </div>
        <div className="feedback-form form">
          <h1>Contact Form</h1>
          <Contact />
        </div>
        <div className="newsletter-form form">
          <h1>Newsletter</h1>
          <Newsletter />
        </div>
      </div>
    </>
  );
}
