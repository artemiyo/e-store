import React from "react";

import SectionItem from "../../components/SectionItem";

import "./HomePage.scss";

class HomePage extends React.Component {
  state = {
    sections: [
      {
        id: 1,
        name: "Men",
        imageUrl:
          "https://thefashionobserver.com/wp-content/uploads/2018/08/fashion-trends.jpg",
        path: "he"
      },
      {
        id: 2,
        name: "Women",
        imageUrl: "https://www.fashionandfriends.rs/media/wysiwyg/_ENE.jpg",
        path: "she"
      },
      {
        id: 3,
        name: "Lifestyle",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0293/9277/files/Home_-_gn_2_1200X.jpg?v=1561506874",
        path: "lifestyle"
      }
    ]
  };

  render() {
    const { sections } = this.state;
    return (
      <section className="section-menu">
        <div className="container">
          <div className="sections">
            {sections.map(section => (
              <SectionItem
                key={section.id}
                section={section}
                history={this.props.history}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default HomePage;
