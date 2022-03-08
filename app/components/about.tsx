import golangIcon from '@iconify/icons-fa6-brands/golang';
import kubernetesIcon from '@iconify/icons-logos/kubernetes';
import pythonIcon from '@iconify/icons-logos/python';
import { Icon } from '@iconify/react';

export default function About() {
  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: "black" }}>
          <span>About me</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <img src="images/myProfile.webp" alt="My profile picture" />
                <Icon icon={golangIcon} style={{ fontSize: "400%", margin: "9% 5% 0 5%", color: "#00ADD8" }} />
                <Icon icon={pythonIcon} style={{ fontSize: "400%", margin: "9% 5% 0 5%" }} />
                <Icon icon={kubernetesIcon} style={{ fontSize: "400%", margin: "9% 5% 0 5%" }} />
              </span>
            </div>
          </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <span className="iconify" data-icon="emojione:red-circle" data-inline="false"></span> &nbsp;{" "}
                  <span className="iconify" data-icon="twemoji:yellow-circle" data-inline="false"></span> &nbsp;{" "}
                  <span className="iconify" data-icon="twemoji:green-circle" data-inline="false"></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br />
                  <span className="wave">Hi :) </span>
                  <br />
                  <br />
                  👋 I'm Denis Fetinin. Fictional person for preview purposes :) I'm working with newest front-end
                  frameworks like Angular, React and Vue. What you are seeing now is portfolio template from Dorota1997.
                  If you like this portfolio template, make sure to ⭐ the repository to make it more recognizable for
                  other users. Thank you 💜
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
