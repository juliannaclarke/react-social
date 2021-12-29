import './styles.css';

import { Link } from 'react-router-dom';

export const PostItem = (props) => {
    const {ID, username, text, date} = props;

    return(

        <div className="post">
            <p className="post-author"> {username} </p>
            <h1 className="post-content">{text}</h1>
            <p className="post-date">{date}</p>
        </div>
    )
}