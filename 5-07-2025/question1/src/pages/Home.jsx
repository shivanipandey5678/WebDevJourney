import React from 'react'
import { useEffect,useState } from 'react'

const Home = () => {
    const[posts,setPosts]=useState([])
    consr [serach,setSearch]=useState('')

    useEffect(()=>{
        fetch('https://dummyjson.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data.posts))
    },[])

    const filteredPosts=posts.filter(post=>post.title.includes(search.toLowerCase()))
  return (
    <div>
       <h2>Blog Posts</h2>
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <ul>
        {filteredPosts.map(post=>(
            <li key={post.id}>
                <Link  to={`/post/${post.id}`}>{post.title}</Link>
                </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
