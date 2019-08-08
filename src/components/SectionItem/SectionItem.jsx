import React from "react";
import { Link } from "react-router-dom";
import "./SectionItem.scss";

const SectionItem = ({ section }) => {
  const { name, imageUrl, path } = section;
  return (
    <Link
      to={path}
      style={{
        background: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imageUrl}) no-repeat top /cover`
      }}
      className="sections__item"
    >
      {name}
    </Link>
  );
};

export default SectionItem;
