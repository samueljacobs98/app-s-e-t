import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        {"Website Development by "}
        <a
          href="https://samueljacobs98.github.io/portfolio-website-react/"
          target="_blank"
          rel="noreferrer"
          className="footer__text-link"
        >
          Samuel Jacobs
        </a>
      </p>
    </footer>
  );
};

export default Footer;
