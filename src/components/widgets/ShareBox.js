import { useSelector } from "react-redux"


const ShareBox = (props) => {
  const { user } = useSelector(state => state.user);
  return (
    <div className="share-box card">
        <div>
            <img src={user ? user.photoURL: "/images/user.svg"} alt="User Avatar" />
            <button disabled={props.loading} onClick={e => {props.setShowModal(true)}}>Start a post</button>
        </div>
        <div>
            <button>
                 <img src="/images/image-icon.svg" alt="Icon Avatar" />
                 Photo
            </button>
            <button>
                 <img src="/images/video-icon.svg" alt="Icon Video" />
                 Video
            </button>
            <button>
                 <img src="/images/event-icon.svg" alt="Icon Event" />
                 Event
        </button>
        <button>
            <img src="/images/article-icon.svg" alt="Icon Article" />
            Write Article
        </button>
        </div>
  </div>
  )
}

export default ShareBox