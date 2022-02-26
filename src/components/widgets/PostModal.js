import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Timestamp } from "firebase/firestore";
import ReactPlayer from "react-player";

import UserInfo from "./UserInfo"
import BtnShare from "./BtnShare"
import PostCreateDetails from "./PostCreateDetails"
import { createPost } from '../../actions';

const PostModal = (props) => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);

    const [text, setText] = useState('');
    const [image, setImage] = useState('');
    const [video, setVideo] = useState('');
    const [invalidType, setInvalidType] = useState(false);

    const fileHandler = (e)=>{
        const file = Object.assign(e.target.files[0], {preview: URL.createObjectURL(e.target.files[0])});
        switch(file.type){
            case'image/jpeg':
                setInvalidType(false);
                setImage(file);
                break;
            case'image/png':
                setInvalidType(false);
                setImage(file);
                break;
            case'image/jpg':
                setInvalidType(false);
                setImage(file);
                break;
            case'image/gif':
                 setInvalidType(false);
                setImage(file);
                break;
            case 'video/mp4':
                setInvalidType(false);
                setVideo(file);
                break;
            case 'video/webm':
                setInvalidType(false);
                setVideo(file);
                break;
            case 'video/flv':
                setInvalidType(false);
                setVideo(file);
                break;
            case 'video/avi':
                setInvalidType(false);
                setVideo(file);
                break;
            default: 
                setInvalidType(true);
                 setImage('');
                 setVideo('');
        }
       
    }
    const uploadRemoveHandler = (e)=>{
        e.preventDefault();
        setImage('');
        setVideo('');
    }
    const submitPostHandler = (e)=>{
        e.preventDefault();
        setImage('');
        setVideo('');
        props.setShowModal(false);
        dispatch(createPost({
            user,
            image,
            video,
            description: text,
            timestamp: Timestamp.now()
        }));
    }

  return (
    <div className='post-modal'>
        <div className="post-modal-content">
            <div className="post-modal-header">
                    <h2>Create a post</h2>
                    <button className='btn-close' onClick={e => {props.setShowModal(false)}}>
                    <img src="/images/close-icon.svg" alt="Icon Close"  />
                    </button>
            </div>
            <div className="post-modal-body">
            <UserInfo className='fst-16 text-left' username={user.displayName} photo={user.photoURL}>
                <BtnShare className='btn-share btn-share-outline fst-14'>
                    <img src="/images/world-icon.svg" alt="Icon World" />
                    <img src="/images/down-icon.svg" alt="Icon Down" />
                </BtnShare>
            </UserInfo>
            <textarea value={text} className='post-content' cols="30" rows="6" placeholder='What do you want to talk about?' onChange={(e)=> setText(e.target.value)}></textarea>
           {invalidType ? <h5 className='danger'>
               <img src="/images/danger-icon.svg" alt="Icon Danger" />
               Invalid content type!
               </h5> : 
               image  ? <div className="post-upload">
               <span className='post-upload-content'>
                <img src={image && image.preview} alt="Post File upload" />
               </span>
               <button className='btn-close' onClick={uploadRemoveHandler}>
                <img src="/images/close-icon.svg" alt="Icon Close" />
               </button>
            </div>:
            video && <div className='post-upload'>
            <ReactPlayer url={video.preview} width='100%' controls />
            <button className='btn-close' onClick={uploadRemoveHandler}>
                <img src="/images/close-icon.svg" alt="Icon Close" />
            </button>
            </div>
            } 
            <PostCreateDetails fileHandler={fileHandler} >
            <button type='button' className={text ? 'btn active': 'btn'} disabled={!text} onClick={submitPostHandler}>Post</button>
            </PostCreateDetails>
            </div>
        </div>
    </div>
  )
}

export default PostModal