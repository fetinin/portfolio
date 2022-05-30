import reactTimelineCss from 'react-vertical-timeline-component/style.min.css';
import { LinksFunction } from 'remix';
import About from '~/components/about';
import Experience from '~/components/experience';
import Footer from '~/components/footer';
import Header from '~/components/header';
import Ribbon, { links as ribbonLinks } from '~/components/ribbon';
import Skills from '~/components/skills';
import experienceData from '~/resume_content/experience';
import { skills } from '~/resume_content/skills';
import socialData from '~/resume_content/social';
import appCss from '~/styles/app.css';

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: reactTimelineCss },
    { rel: "stylesheet", href: appCss },
    ...ribbonLinks(),
  ];
};

export default function Index() {
  return (
    <div>
      <Header />
      <Ribbon />
      <About/>
      {/* <Projects projects={projectsData} /> */}
      <Skills skills={skills} />
      <Experience experience={experienceData} />
      <Footer social={socialData}/>
    </div>
  );
}
