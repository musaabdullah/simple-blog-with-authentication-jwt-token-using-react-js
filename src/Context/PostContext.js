// import {createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// export const PostContext = createContext();


// const PostContextProvider = (props) => {
    
//     const [post, setPost] = useState([])
     

//     useEffect(() => {
//         const fetchPosts = () => {
//                 // const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//                 fetch('https://jsonplaceholder.typicode.com/posts')
//                 .then(res => {
//                     return res.json();
//                 })
//                 .then(data => {
                    
//                     setPost(...data, {id: data.id, title: data.title, body: data.body});
//                     console.log(post.title);
//                 })
//                 .catch(error => console.log(error))

                
//         }
//         fetchPosts();
        
//     }, [])


// return (
    
//     <PostContext.Provider value = {{   }}>
//         {props.children}
//     </PostContext.Provider>
    
//     );


// }

// export default PostContextProvider;