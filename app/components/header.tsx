import React from 'react';
import Typical from 'react-typical';

// class Header extends Component {
//   titles = [];

//   constructor() {
//     super();
//     this.state = { checked: false };
//     this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
//   }

// }

// function onThemeSwitchChange(checked: boolean) {
//   this.setState({ checked });
//   this.setTheme();
// }

// setTheme() {
//   var dataThemeAttribute = "data-theme";
//   var body = document.body;
//   var newTheme =
//     body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
//   body.setAttribute(dataThemeAttribute, newTheme);
// }

export default function Header() {
  const titles = ["Golang Developer", "Python developer", "Tech Lead"];
  const animationSpeed = 500;
  const titlesFormatted = titles
    .map((x) => [x.toUpperCase(), animationSpeed])
    .flat();

  const HeaderTitleTypeAnimation = React.memo(
    () => {
      return (
        <Typical
          className="title-styles"
          steps={titlesFormatted}
          loop={Infinity}
        />
      );
    },
    (props, prevProp) => true
  );

  return (
    <header id="home">
      <div className="row aligner" style={{ height: "100%" }}>
        <div className="col-md-12">
          <div>
            <span
              className="iconify header-icon"
              data-icon="la:laptop-code"
              data-inline="false"
            ></span>
            <br />
            <h1 className="mb-0">
              <Typical steps={["Denis Fetinin"]} wrapper="p" />
            </h1>
            <div className="title-container">
              <Typical
                className="title-styles"
                steps={titlesFormatted}
                loop={Infinity}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
