import { Link } from "react-router-dom";

const SignOut = ({logoutHandler}) => {
  return (
      <div className='sign-out'  onClick={logoutHandler}>
    <Link to='#'>
        Sign Out
    </Link>
      </div>
  )
}

export default SignOut