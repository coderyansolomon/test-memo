export async function getPosts(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        console.log('getting posts')
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
    }
}

export default async function ComponentOne() {
    const posts = await getPosts()

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
