import './styles.css'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import SocialContext from '../../../context/socialContext.js';
import { PostItem } from '../../PostItem';

export const ProfilePage = (props) => {
    const username = "sugarfairy";

    const [post, setPost] = useState({});

    const globalState = useContext(SocialContext);

    useEffect( () => {
        const post = globalState.posts.find(
            (post) => post.username.stringValue === username
            );
        setPost(post);
    }, [])

    return (
        <div className="profile-page">
            <h1 className="profile-title"> {post.username?.stringValue} </h1>
            <div className = 'posts-container'>
                {
                post.map((post) => (
                <PostItem key={post.ID.stringValue} username={post.username.stringValue} text={post.text.stringValue} 
                    date={post.date.stringValue} id={post.ID.stringValue}></PostItem>
                ))
                }
            </div>
        </div>
    )
}