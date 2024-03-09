import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">Тестовое задание Valantis.</p>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2024</p>
        <nav>
          <ul className="footer__links">
            <li><a href="https://github.com/Aliya-f/Valantis" target="_blank" className="footer__link" rel="noreferrer">Ссылка на Github</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;