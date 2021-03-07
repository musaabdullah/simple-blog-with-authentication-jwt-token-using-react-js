import { useContext } from 'react'
import './home.css';
import Post from '../components/Post';
import Card from '../components/Card';
// import { PostContext } from '../Context/PostContext';
import { useState, useEffect } from 'react';

function Home() {
    // var { posts } = useContext(PostContext);
    const [post, setPost] = useState([])
    const [limit, setLimit] = useState(5);

    useEffect(() => {
        const fetchPosts = () => {
                // const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
                fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    // setPost(...data, {id: data.id, title: data.title, body: data.body});
                    setPost(data);
                    console.log(post);
                })
                .catch(error => console.log(error))
        }
        fetchPosts();
    }, [])
    return (
        <div>
            <Card />
            <Post limit={limit} post={post}/>
            <button onClick={() => setLimit(limit => limit + 5)} className="post__button">Show more</button>
        </div>
    )
}

export default Home
