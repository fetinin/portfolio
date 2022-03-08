import reactTimelineCss from 'react-vertical-timeline-component/style.min.css';
import { LinksFunction } from 'remix';
import About from '~/components/about';
import Experience from '~/components/experience';
import Footer from '~/components/footer';
import Header from '~/components/header';
import Projects from '~/components/projects';
import Skills from '~/components/skills';
import experienceData from '~/resume_content/experience';
import projectsData from '~/resume_content/projects';
import { skills } from '~/resume_content/skills';
import socialData from '~/resume_content/social';
import appCss from '~/styles/app.css';

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: reactTimelineCss },
    { rel: "stylesheet", href: appCss },
  ];
};

export default function Index() {
  return (
    <div>
      <Header />
      {/* <div className="col-md-12 mx-auto text-center language">
        <div
          onClick={() =>
            // this.applyPickedLanguage(
            //   window.$primaryLanguage,
            //   window.$secondaryLanguageIconId
            // )
            console.log("change language")
          }
          style={{ display: "inline" }}
        >
          <span
            className="iconify language-icon mr-5"
            data-icon="twemoji-flag-for-flag-united-kingdom"
            data-inline="false"
            // id={window.$primaryLanguageIconId}
          ></span>
        </div>
        <div
          onClick={() =>
            // this.applyPickedLanguage(
            //   window.$secondaryLanguage,
            //   window.$primaryLanguageIconId
            // )
            console.log("apply language")
          }
          style={{ display: "inline" }}
        >
          <span
            className="iconify language-icon"
            data-icon="twemoji-flag-for-flag-poland"
            data-inline="false"
            id={window.$secondaryLanguageIconId}
          ></span>
        </div>
      </div> */}
      <About/>
      <Projects projects={projectsData} />
      <Skills skills={skills} />
      <Experience expirience={experienceData} />
      <Footer social={socialData}/>
    </div>
  );
}
