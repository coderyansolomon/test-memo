'use client'
import { useState, useEffect } from 'react';
import { getPosts } from './ComponentOne';

export default function ComponentTwo() {
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
