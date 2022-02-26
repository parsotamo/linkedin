import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { userLogout } from "../../actions";
import SignOut from './SignOut';

const User = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);


  const logoutHandler = (e)=>{
    e.preventDefault();
    dispatch(userLogout());
  }
  
  
  return (
      <li className='nav-item user-item'>
    <Link to='#' className='nav-link'>
        <img className='user-photo' src={user && user.photoURL ? user.photoURL: "/images/user.svg"} alt="User Profile" />
        <div>
        <span>Me</span>
        <img src="/images/down-icon.svg" alt="Down icon" />
        </div>
    </Link>
    <SignOut logoutHandler={logoutHandler} />
      </li>
  )
}

export default User