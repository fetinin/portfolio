import ribbonCSS from '~/styles/ribbon.css';

export const links = () => [
  { rel: "stylesheet", href: ribbonCSS },
];

export default function Ribbon() {
  return (
    <div className="ribbon ribbon-top-right"><a href="docs/Resume-Denis-Fetinin.pdf"><span>Download CV</span></a></div>
  )
}