import { Typewriter } from 'react-simple-typewriter';

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
  const titlesFormatted = titles.map((x) => [x.toUpperCase()]).flat();

  return (
    <header id="home">
      <div className="row aligner" style={{ height: "100%" }}>
        <div className="col-md-12">
          <div>
            <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
            <br />
            <h1 className="mb-0">
            {/* Denis Fetinin */}
              <Typewriter words={["Denis Fetinin"]}/>
            </h1>
            <div className="title-container title-styles">
              <Typewriter words={titlesFormatted} loop={Infinity} typeSpeed={50} />
            </div>
            {/* <Switch
              checked={checked}
              // onChange={this.onThemeSwitchChange}
              offColor="#baaa80"
              onColor="#353535"
              className="react-switch mx-auto"
              width={90}
              height={40}
              uncheckedIcon={
                <span
                  className="iconify"
                  data-icon="twemoji:owl"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "20px",
                    color: "#353239",
                  }}
                ></span>
              }
              checkedIcon={
                <span
                  className="iconify"
                  data-icon="noto-v1:sun-with-face"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "10px",
                    color: "#353239",
                  }}
                ></span>
              }
              id="icon-switch"
            /> */}
          </div>
        </div>
      </div>
    </header>
  );
}
