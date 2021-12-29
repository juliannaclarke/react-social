import "./styles.css";
import {useEffect, useState, useContext} from 'react'
import { PostItem } from "../../PostItem";
import { SocialContext } from "../../../context/socialContext";

export const SocialFeedPage = () => {
  const [posts, setPosts] = useState([]);

  const globalState = useContext(SocialContext);

  useEffect(
    () => {
      getPosts();
    }, []
  );

  const getPosts = async() => {
    try{
      const response = await fetch('https://firestore.googleapis.com/v1/projects/good-memes-4a2fd/databases/(default)/documents/posts/');
      const data = await response.json();

      const formattedData = data.documents.map((item) => {
        return item.fields
      });

      setPosts(formattedData);
      globalState.initialisePosts(formattedData);

    } catch (err){
      console.log(err);
    }
  }

  return (
    <div className="feed-page">
      <h1 className = 'feed-title'>Recent Posts</h1>
      <div className = 'posts-container'>
        {
          posts.map((post) => (
            <PostItem key={post.ID.stringValue} username={post.username.stringValue} text={post.text.stringValue} 
            date={post.date.stringValue} id={post.ID.stringValue}></PostItem>
          ))
        }
      </div>
    </div>
  );
};
