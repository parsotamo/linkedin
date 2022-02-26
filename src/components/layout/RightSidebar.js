
import { Link } from "react-router-dom"
import FollowCard from "../widgets/FollowCard"
import BannerCard from "../widgets/BannerCard"
import UserInfo from "../widgets/UserInfo"
import Footer from '../layout/Footer';
import { trimChar } from '../../helpers';

const RightSidebar = () => {
  return (
   <aside className='right-sidebar'>
       <FollowCard>
           <header >
            <h2>
                Add your feed
            </h2>
                <img src="/images/feed-icon.svg" alt="Icon Feed" />
           
           </header >
           <ul className='feed-list'>
               <li>
                    <UserInfo className='text-left fst-14' static={{name: 'Ilan Parsotamo', image: '/images/IlanParso.png'}}>
                        <span>
                            {trimChar('Software Engineer, Web Developer, Freelancer,IT Network Technician', 50, true)}
                            </span>
                    </UserInfo>
                    <button>
                        <img src="/images/plus-icon.svg" alt="Plus" />
                        <span>Follow</span>
                    </button>
               </li>
               <li>
                    <UserInfo className='text-left fst-14' static={{name: 'John Doe', image: '/images/user.svg'}}>
                            <span>
                                {trimChar('Leadership and Supply Chain Management Specialist, MBA | Business Development and Strategy Consultant', 50, true)}
                                
                                </span>
                        </UserInfo>
                        <button>
                        <img src="/images/plus-icon.svg" alt="Plus" />
                            <span>Follow</span>
                        </button>
               </li>
           </ul>
           <Link to='#' className="recommendation">
                View all recommendation
                <img src="/images/right-icon.svg" alt="Icon Right" />
           </Link>
       </FollowCard>
        <BannerCard>
            <img src="/images/find_job_ad.jpeg" alt="Banner Find Job" />
        </BannerCard>
        <Footer />
    </aside>
  )
}

export default RightSidebar