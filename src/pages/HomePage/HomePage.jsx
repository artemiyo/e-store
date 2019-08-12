import React from "react";

import SectionItem from "../../components/SectionItem";
import { SECTIONS_DATA } from "./data";

import "./HomePage.scss";

class HomePage extends React.Component {
  state = {
    sections: SECTIONS_DATA
  };

  render() {
    const { sections } = this.state;
    return (
      <section className="section-menu">
        <div className="container">
          <div className="sections">
            {sections.map(section => (
              <SectionItem key={section.id} section={section} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default HomePage;
