export default function Footer() {
  const social = [
    {
      name: "github",
      url: "https://github.com/What-If-I",
      class: "fab fa-github",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/d.fetinin",
      class: "fab fa-instagram",
    },
    {
      name: "telegram",
      url: "https://www.t.me/fetinin",
      class: "fab fa-telegram",
    },
  ];

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

        <div className="copyright py-4 text-center">
          <div className="container">
            <small>Copyright &copy; Denis Fetinin</small>
          </div>
        </div>
      </div>
    </footer>
  );
}
