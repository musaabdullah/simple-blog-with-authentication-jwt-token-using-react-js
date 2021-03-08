import React, {useState, useEffect} from 'react'
import './style.css';
import Card from '../components/Card';
import IMG from './IMG2.png';

import { useParams } from 'react-router';
import axios from 'axios';
function Post() {

    const { id } = useParams();
    const [post, setPost] = useState();
    useEffect( () => {
         const fetchData = async () => {
             const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
             if(res.data){
                 setPost(res.data);
                console.log(res.data);
            }else{
                 console.log(res.data.error);
             }
         }
         fetchData();
    }, [])

    
    return (
        <div >
            <Card />
            {post && <div   className="post" style={{border: "none", width: "80%"}}> 
            <div className="post__image">
                <img src={IMG} />
            </div>
           
           <div className="post__text">
            <div className="post__title">
                 {post.title}
            </div>
            <div className="post__body">
                {post.body}
            </div>
            </div>
        </div> }
        </div>  
    )
}

export default Post
