import { Link } from "react-router-dom"

const Work = () => {
  return (
    <li className='nav-item work-item'>
    <Link to='#' className='nav-link'>
        <img src="/images/nav-work.svg" alt="Work Icon" />
        <div>
        <span>Work</span>
        <img src="/images/down-icon.svg" alt="Down Icon" />
        </div>
    </Link>
    </li>
  )
}

export default Work