import React from "react";
import "./nav_card.css";
import { useLocation, useNavigate } from "react-router-dom";
import * as i from "../../assets/svgs/index";

export default function NavCard({ img, title, description, path }) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div
      className={`nav_card ${path === location.pathname ? "act" : ""}`}
      onClick={() => navigate(path)}
    >
      <div className="left">{img}</div>
      <div className="texts">
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
      <div className="right">
        <i.Icon_Framed />
      </div>


    </div>
  );
}
