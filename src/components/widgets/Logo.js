import { Link } from "react-router-dom"

const Logo = (props) => {
  return (
   <Link to='/' className={props.className}>
        <img src="images/home-logo.svg" alt="Linkedin Logo" />
   </Link>
  )
}

export default Logo