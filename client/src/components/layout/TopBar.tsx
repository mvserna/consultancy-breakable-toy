import React, { FC } from "react";

import { Link } from "react-router-dom";
import "./styles/top-bar.pcss";

export const TopBar: FC = () => (
  <div className="top-bar">
    <p className="top-bar__item">
      <a href="https://en.wikipedia.org/wiki/Squid">Squid Info</a>
    </p>
    <p className="top-bar__item">
      <Link to="/">Home</Link>
    </p>
  </div>
);
