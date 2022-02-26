import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div id='footer'>
      <ul className='footer-nav'>
        <li className="footer-nav-item">
          <Link to='#' className="footer-nav-link">
            About
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link to='#' className="footer-nav-link">
          Accessibility
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link to='#' className="footer-nav-link">
          Help Center
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link to='#' className="footer-nav-link">
          Privacy & Terms
          <img src="/images/chevron-down-icon.svg" alt="Icon Down" />
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link to='#' className="footer-nav-link">
          Ad Choices
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link to='#' className="footer-nav-link">
          Advertising
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link to='#' className="footer-nav-link">
          Business Services
          <img src="/images/chevron-down-icon.svg" alt="Icon Down" />
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link to='#' className="footer-nav-link">
          Get the LinkedIn app
          </Link>
        </li>
        <li className="footer-nav-item">
          <Link to='#' className="footer-nav-link">
          More
          </Link>
        </li>
      </ul>
      <p className="copyright">
        <img src="/images/login-logo.svg" alt="LinkedIn Logo" />
        LinkedIn Corporation &copy;
        &nbsp;
        {new Date().getFullYear()}
      </p>
    </div>
  )
}

export default Footer