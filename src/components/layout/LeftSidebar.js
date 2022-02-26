import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

import UserCard from "../widgets/UserCard"
import CommunityCard from '../widgets/CommunityCard';
import UserInfo from "../widgets/UserInfo";

const LeftSidebar = () => {
    const { user } = useSelector(state => state.user);
    console.log(user)
  return (
    <aside className='left-sidebar'>
        <UserCard>
            <span className='user-card-bg'></span>
          <UserInfo className='d-column fst-16 v-center' username={user.displayName} photo={user.photoURL} >
              <span>Add professional skills and education to your profile</span>
          </UserInfo>
           <div className="user-connections">
                <Link to='#'>
                    <div>
                        <span>Connections</span>
                        <span>Grow your network</span>
                    </div>
                    <img src="/images/widget-icon.svg" alt="Icon Widget" />
                </Link>
           </div>
           <Link to='#' className="user-item">
               <span>
               <img src="/images/item-icon.svg" alt="Icon Item" />
                   My Items
                </span>
           </Link>
        </UserCard>
        <CommunityCard>
            <Link to='#'>Groups</Link>
            <Link to='#'>
                <span>
                    Events
                    <img src="/images/plus-icon.svg" alt="Icon Plus" />
                </span>
            </Link>
            <Link to='#'>Follow Hashtags</Link>
            <Link to='#'>Discover more</Link>
        </CommunityCard>
    </aside>
  )
}

export default LeftSidebar