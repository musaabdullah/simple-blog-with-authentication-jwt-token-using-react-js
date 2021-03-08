import React from 'react'
import IMG from './IMG.jpg';
import { Link } from 'react-router-dom';

function Post({post, limit}) {
    return (
        <div>
        { post.slice(0,limit).map((p) => (
        <div key={post.id} className="post">
            <div className="post__image">
                <img src={IMG} />
            </div>
           
           <div className="post__text">
            <div className="post__title">
                 {p.title}
            </div>
            <div className="post__body">
                {p.body}
            </div>
            </div>
            <Link className="post__button" to={`/post/${p.id}`}>Read more</Link>
        </div>
))}
        </div>
    )
}

export default Post
