import React, {useState} from 'react';

export const SocialContext = React.createContext({
    posts: [],
    initialisePosts: () => {},
});

export const SocialContextProvider = (props) => {
    const [posts, setPosts] = useState([]);

    const initPosts = (postsFromAPI) => {
        setPosts(postsFromAPI);
    }

    
    
    return (<SocialContext.Provider
     value={{posts: posts, initialisePosts: initPosts }}
    >
        {props.children}
    </SocialContext.Provider>)

} 

export default SocialContext;