import React, { useContext, useEffect,useState } from 'react';
import './styles.css';
import Post from '../Post';
import postService from '../../../services/postService';
import AuthContext from '../../../contexts/auth';


const MyPosts = (props) => {

    const [user] = useContext(AuthContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getPost().then(posts => {
            const myPostsArray = posts.data.filter(p => p.author._id === user.userId);
            setPosts(myPostsArray);
        });
    },[user.userId]);

    return (
        posts.length !== 0 ?
            <div className="fix"> {posts.map(post => {
                        return <Post
                            key={post._id}
                            id={post._id}
                            pictureUrl={post.pictureUrl}
                            description={post.description}
                            title={post.title}
                             author={post.author.username}/>
                    })} </div> :
            <div className="Posts">
                <h1>You haven't created any posts yet!</h1>
            </div>
    );

}


export default MyPosts;