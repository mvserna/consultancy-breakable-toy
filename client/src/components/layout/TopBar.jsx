import React from "react";

import { Link } from "react-router-dom";
import "./styles/top-bar.pcss";

// Turn "Go to some other site" into a link to a site of your choosing

export const TopBar = () => (
  <div className="top-bar">
    <p className="top-bar__item">
      <a href="https://en.wikipedia.org/wiki/Squid">Squid Info</a>
    </p>
    <p className="top-bar__item">
      <Link to="/">Home</Link>
    </p>
  </div>
);
