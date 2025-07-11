import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [singleBlog, setSingleBlog] = useState({});
  const navigate = useNavigate();



  const fetchBlogs = async (req, res) => {

    try {
      setLoading(true)
      const Response = await axios.get('http://localhost:1234/blogs/blogs');
      if (Response.status == 200) {
        setBlogs(Response.data.allBlog);
        setLoading(false)
      } else {
        setError(true)
        setLoading(false)
      }
    } catch (error) {
      setError(true)
    }
  }

  async function deleteBlog(id) {
    const token = localStorage.getItem('token')
    const response = await axios.delete(`http://localhost:1234/blogs/blogs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (response.status == 200) {
      alert('blog deleted');
      fetchBlogs();
    }

  }



  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div>
      <h1 className='text-3xl text-center font-bold my-6'>blogs</h1>
      <div className='max-h-screen flex items-center justify-center '>

        {error && <p className='text-red-500 text-center mb-2 text-2xl'>Something went wrong!!</p>}
        {loading && <p className='text-red-500 text-center mb-2 text-2xl'>Loading........</p>}
      </div>
      {
        blogs.length > 0 && blogs.map((blog) => (

          <div key={blog._id} className='shadow-md rounded container mx-auto my-7 p-10 '>
            <h2 className='underline'><strong>{blog.title}</strong></h2>
            <p className='text-sm text-gray-700 my-3 '>{blog.content}</p>
            <div className='flex justify-between'>


              <span className='text-sm'>-{blog.author?.username || "Unknown"}</span>
              <div className='flex gap-2'>

                {blog.author?._id === localStorage.getItem('userId') && (
                  <div className="flex gap-4">
                    <Link to={`/edit-blog/${blog._id}`}><button className="border-2 border-blue-500 text-blue-500 font-semibold rounded px-4 py-2 hover:bg-blue-500 hover:text-white" >Edit</button></Link>
                    <button className="border-2 border-red-500 text-red-500 font-semibold rounded px-4 py-2 hover:bg-red-500 hover:text-white" onClick={() => deleteBlog(blog._id)}>Delete</button>
                  </div>
                )}

                <button className='border-2 border-gray-500 text-black font-semibold rounded px-4 py-2'  >View more</button>

              </div>
            </div>




          </div>

        ))
      }


    </div>
  )
}

export default Blog
