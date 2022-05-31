import socialData from '~/resume_content/social';

export default function Footer({social}: {social: typeof socialData}) {
  var networks = social.map(function (network) {
    return (
      <span key={network.name} className="m-4">
        <a href={network.url} target="_blank" rel="noopener noreferrer">
          <i className={network.class}></i>
        </a>
      </span>
    );
  });

  return (
    <footer>
      <div className="col-md-12">
        <div className="social-links">{networks}</div>
      </div>
    </footer>
  );
}
