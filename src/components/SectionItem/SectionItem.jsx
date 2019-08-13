import React from "react";
import { withRouter } from "react-router-dom";
import "./SectionItem.scss";

const SectionItem = ({ section, history, match }) => {
  const { name, imageUrl, path } = section;
  return (
    <div
      style={{
        background: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imageUrl}) no-repeat top /cover`
      }}
      className="sections__item"
      onClick={() => history.push(`${match.url}shop/${path}`)}
    >
      {name.toUpperCase()}
    </div>
  );
};

export default withRouter(SectionItem);
