import { Link } from "react-router-dom"

const Main = () => {
  return (
    <main className='main'>
      <div className="share-box card">
        <div>
            <img src="/images/user.svg" alt="User Photo" />
            <button>Start a post</button>
        </div>
        <div>
            <button>
              <img src="/images/image-icon.svg" alt="Icon Photo" />
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

      <div className="article-card card">
        <div className="shared-actor">
          <Link to='#'>
            <img src="/images/user.svg" alt="User Photo" />
            <div>
              <span>Title</span>
              <span>Info</span>
              <span>Date</span>
            </div>
          </Link>
          <button>
          <img src="/images/ellipsis-icon.svg" alt="Icon Ellipsis" />
          </button>
        </div>
        <div className="shared-description">
          <h3>Description</h3>
        </div>
        <Link to="#" className="shared-image">
          <img src="/images/coding.jpg" alt="Picture of grey Mac with Html code" />
        </Link>
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
            <Link to='#'>4 comments</Link>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Main