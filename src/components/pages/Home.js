import { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Container from '../widgets/Container';
import Section from '../widgets/Section';
import Layout from '../layout/Layout';
import LeftSidebar from '../layout/LeftSidebar';
import Main from '../layout/Main';
import RightSidebar from '../layout/RightSidebar';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const  { user }  = useSelector(state => state.user);

  useEffect(()=>{
      if(!user){
        navigate('/login');
      }
  }, [user, navigate]);
  
  return (
    <Container className='container-home' >
      <Section className='content-hiring'>
          <h5>
            <Link to="#">Hiring in a hurry? - </Link>
            </h5>
          <p>Find talented pros in record time with Upwork and keep business moving.</p>
      </Section>
      <Layout className='grid'>
        <LeftSidebar />
        <Main showModal={showModal} setShowModal={setShowModal} />
       <RightSidebar />
      </Layout>
    </Container>
  )
}

export default Home