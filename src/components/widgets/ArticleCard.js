import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import UserInfo from "./UserInfo"
import { getPosts } from "../../actions"
import ReactPlayer from "react-player"

const ArticleCard = () => {
    const dispatch = useDispatch();
    const { loading, posts, success } = useSelector(state => state.posts);
    useEffect(()=>{
        if(!success){
            dispatch(getPosts());
        }
    }, [success, dispatch]);

  return (
        loading ? <div className='spinner'>
        <img src="/images/spinner-icon.svg" alt="Icon Spinner" />
    </div> 
    : !success ? <h1>Something went wrong</h1>: success && posts.length === 0 ? 
        <h1 className='fst-14 danger'>Nothing posted yet</h1>: 
        <div className="article-card card">
            {
                posts.map((post, ind) => (
                    <div key={ind}>
                        <UserInfo className='fst-14 text-left' username={post.actor.fullName} photo={post.actor.photo}>
                            <span>{post.actor.email}</span>
                            <span>{post.actor.date.toDate().toLocaleDateString()}</span>
                        </UserInfo>
                        <button>
                            <img src="/images/ellipsis-icon.svg" alt="Icon Ellipsis" />
                        </button>
                
                        <div className="shared-description">
                            <span>{post.description}</span>
                        </div>
                        {post.sharedImage ?
                        <Link to="#" className="shared-image">
                            <img src={post.sharedImage} alt={post.description} />
                        </Link>: post.video ?
                        <ReactPlayer url={post.video} width='100%' controls />: null                        
                    }
                        <ul className="shared-tweets">
                            <li>
                                <Link to='#'>
                                    <img src="/images/likes-icon.svg" alt="Icon Like" />
                                </Link>
                                <Link to='#'>
                                    <img src="/images/clap-icon.svg" alt="Icon Clap" />
                                </Link>
                                <Link to='#'>
                                    <img src="/images/love-icon.svg" alt="Icon Love" />
                                </Link>
                                    <span className="tweet-counts">75</span>
                            </li>
                            <li className="comments">
                                <Link to='#'>{post.comments} comments</Link>
                            </li>
                        </ul>
                
                        <ul className="shared-actions">
                            <li>
                                <Link to='#'>
                                    <img src="/images/like-icon.svg" alt="Icon Like" />
                                    Like
                                </Link>
                            </li>
                            <li>
                                <Link to='#'>
                                    <img src="/images/comment-icon.svg" alt="Icon Comment" />
                                    Comment
                                </Link>
                            </li>
                            <li>
                                <Link to='#'>
                                    <img src="/images/share-icon.svg" alt="Icon Share" />
                                    Share
                                </Link>
                            </li>
                            <li>
                                <Link to='#'>
                                    <img src="/images/send-icon.svg" alt="Icon Send" />
                                    Send
                                </Link>
                            </li>
                        </ul>
            </div>
                ))
            }
            </div>
  )
}

export default ArticleCard;