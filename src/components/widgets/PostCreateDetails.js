import BtnShare from "./BtnShare"

const PostCreateDetails = (props) => {
   
  return (
    <div className="post-create-details">
    <div className='post-create-details-items'>
       <span>
           <input id='post-file' type="file" style={{display: 'none'}} onChange={props.fileHandler} />
        <label htmlFor='post-file'>
            <img src="/images/image-icon.svg" alt="Icon to add media" />
        </label>
        </span>
       <span>
       <input id='post-file' type="file" style={{display: 'none'}} onChange={props.fileHandler} />
        <label htmlFor='post-file'>
        <img src="/images/video-icon.svg" alt="Icon Video" />
        </label>
        </span>
       <span>
        <label>
        <img src="/images/file-icon.svg" alt="Icon File" />
        </label>
        </span>
       <span>
        <label>
        <img src="/images/nav-jobs.svg" alt="Icon Jobs" />
        </label>
        </span>
       <span>
        <label>
        <img src="/images/celebrate-icon.svg" alt="Icon Celebrate" />
        </label>
        </span>
       <span>
        <label>
        <img src="/images/poll-icon.svg" alt="Icon Poll" />            
        </label>
        </span>
       <span>
        <label>
        <img src="/images/ellipsis-icon.svg" alt="Icon Ellipsis" />
        </label>
        </span>
        <BtnShare className='btn-share fst-14' >
            <img src="/images/comment-icon.svg" alt="Icon Comment" />
        </BtnShare>
    </div>
    {props.children}
    
</div>
  )
}

export default PostCreateDetails