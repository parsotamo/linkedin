import { Link } from 'react-router-dom';

import PostModal from './PostModal';

const HomeNavList = (props) => {
  return (
    <ul className={props.className}>
        <li className="nav-item">
            <Link to="#" className="nav-link active">
                <img src="/images/nav-home.svg" alt="Home Icon" />
                <span>Home</span>
                </Link></li>
        <li className="nav-item">
            <Link to="#" className="nav-link">
            <img src="/images/nav-network.svg" alt="Network Icon" />
                <span>My Network</span>    
            </Link></li>
        <li className="nav-item add-item" onClick={e => {props.setShowModal(true)}}>
        <Link to="#" className="nav-link" >
            <img src="/images/add-icon.svg" alt="Add Icon" />
                <span>Post</span>    
        </Link></li>
        <li className="nav-item job-item">
            <Link to="#" className="nav-link">
        <img src="/images/nav-jobs.svg" alt="Job Icon" />
                <span>Jobs</span>    
            </Link></li>
        <li className="nav-item message-item">
            <Link to="#" className="nav-link">
            <img src="/images/nav-messaging.svg" alt="Home Icon" />
                <span>Messages</span>    
            </Link></li>
        <li className="nav-item notification-item">
            <Link to="#" className="nav-link">
            <img src="/images/nav-notifications.svg" alt="Home Icon" />
                <span>Notifications</span>    
            </Link></li>
        {props.children}
        {props.showModal && <PostModal setShowModal={props.setShowModal} />}
    </ul>
  )
}

export default HomeNavList