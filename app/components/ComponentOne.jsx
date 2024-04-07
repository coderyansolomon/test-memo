'use client'
import { useState, useEffect } from 'react';

export async function getPosts(setPosts){
    console.log('getting posts')
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data); // Set the posts in state
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
    }
}

export default function ComponentOne() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts(setPosts)
    }, []); // The empty array ensures this effect runs only once after the initial render

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
