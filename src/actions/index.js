import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT, CREATE_POST_REQUEST, CREATE_POST_SUCCESS, CREATE_POST_FAIL, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAIL } from "./constants";
import { signInWithPopup } from "firebase/auth";
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import { auth, provider, db } from '../firebase';

export const userLogin = () => async(dispatch, getState)=>{
    try {
        // dispatch({type: USER_LOGIN_REQUEST});
        const res = await signInWithPopup(auth, provider);
        // const credential = GoogleAuthProvider.credentialFromResult(res);
        // const token = credential.accessToken;
        console.log(res.user);
        dispatch({type: USER_LOGIN_SUCCESS, payload: res.user})
        localStorage.setItem('user', JSON.stringify(getState().user.user));
    }catch (error) {
        dispatch({type: USER_LOGIN_FAIL, payload: error});
    }
} 

export const userLogout = () => async dispatch =>{
    try{    
        await auth.signOut();
        localStorage.removeItem('user');
        dispatch({type: USER_LOGOUT});
    }catch (error) {
    }
}

export const createPost = (post) => async dispatch =>{
    const storage = getStorage();
    let storageRef;
    let uploadTask;
    if(post.image){
        storageRef = ref(storage, post.image.name);
        uploadTask =  uploadBytesResumable(storageRef, post.image);
    }else if(post.video){
        storageRef = ref(storage, post.video.name);
        uploadTask =  uploadBytesResumable(storageRef, post.video);
    }
    
    if(uploadTask){
        uploadTask.on('state_changed', (snapshot)=>{
            dispatch({type: CREATE_POST_REQUEST});
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes )* 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'running':
                      console.log('Upload is running');
                      break;
                    default: 
                    console.log('something went wrong');
                  }
            }, error =>{
                dispatch({type: CREATE_POST_FAIL, payload: error})
            }, async()=>{
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
               await addDoc(collection(db, 'posts'), {
                    actor: {
                        fullName: post.user.displayName,
                        email: post.user.email,
                        date: post.timestamp,
                        photo: post.user.photoURL
                    },
                    sharedImage: post.image ? downloadURL: null,
                    video: post.video ? downloadURL: null,
                    comments: 0,
                    description: post.description
               });
               dispatch({type: CREATE_POST_SUCCESS});     
            });
    }else{
        try {
            await addDoc(collection(db, "posts"), {
                actor: {
                    fullName: post.user.displayName,
                    email: post.user.email,
                    date: post.timestamp,
                    photo: post.user.photoURL
                },
                sharedImage: null,
                video:  null,
                comments: 0,
                description: post.description
              });
        } catch (error) {
            console.log(error);
        }
        dispatch({type: CREATE_POST_SUCCESS});        
    }
    
}

export const getPosts = ()=> async dispatch =>{
    try {
        dispatch({type: GET_POSTS_REQUEST});
        const q = query(collection(db, 'posts'), orderBy('actor.date', 'desc')); 
        const snapshot = await getDocs(q);
        const docs = snapshot.docs.map(doc => doc.data());
        dispatch({type: GET_POSTS_SUCCESS, payload: docs});
    } catch (error) {
        dispatch({type: GET_POSTS_FAIL, payload: error});
    }
}