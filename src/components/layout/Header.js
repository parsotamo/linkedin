import { useState } from 'react';

import Container from "../widgets/Container";
import Content from '../widgets/Content';
import Logo from '../widgets/Logo';
import Search from "../widgets/Search";
import Nav from "../widgets/Nav";
import HomeNavList from '../widgets/HomeNavList';
import User from '../widgets/User';
import Work from '../widgets/Work';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Container className='container-header'>
        <Content className='content-header'>
            <Logo className='home-logo' />
            <Search className='navigation-search' />
            <span className="nav-item message-item">
            <img src="/images/nav-messaging.svg" alt="Home Icon" />
           </span>
            <Nav className='navigation-home'>
               <HomeNavList className='nav-menu' showModal={showModal} setShowModal={setShowModal} >
                  <User />
                  <Work />
               </HomeNavList>
            </Nav>
        </Content>
    </Container>
  )
}

export default Header