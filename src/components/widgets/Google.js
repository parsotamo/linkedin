import { useDispatch } from 'react-redux';

import { userLogin } from '../../actions';


const Google = () => {
  const dispatch = useDispatch();
  const loginHandler = (e)=>{
    e.preventDefault();
    dispatch(userLogin());
  }
  return (
    <button type="submit" className="cta-google" onClick={loginHandler}>
        <img src="/images/google.svg" alt="Google Icon" />
        Sign in with Google
    </button>
  )
}

export default Google