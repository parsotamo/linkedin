import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Container from '../widgets/Container';
import Nav from '../widgets/Nav';
import Join from '../widgets/Join';
import SignIn from '../widgets/SignIn';
import Section from '../widgets/Section';
import Hero from '../widgets/Hero';
import Form from '../widgets/Form';
import Google from '../widgets/Google';

const Login = () => {
  const navigate = useNavigate();
  const {user, success} = useSelector(state => state.user);


  useEffect(()=>{
      if(user || success){
        navigate('/');
      }
  }, [user, success, navigate]);
  return (
    <Container className='container-login'>
      <Nav className='navigation-login'>
        <Link className='logo' to="/">
          <img src={'/images/login-logo.svg'} alt='Login Logo' />
        </Link>
        <div className="">
          <Join className='cta-register' />
          <SignIn />
        </div>
      </Nav>
      <Section className='welcome'>
          <Hero />
          <Form >
            <Google  />
          </Form>
      </Section>

    </Container>
  )
}


export default Login;