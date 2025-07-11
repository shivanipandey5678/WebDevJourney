import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateBlog = () => {

  const [blogData, setBlogData] = useState({
    title: '',
    content: ''
  })
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value })
  }

  async function handleFormSubmit(e) {
    try {
      e.preventDefault();
      const token=localStorage.getItem('token');

      const response = await axios.post('http://localhost:1234/blogs/blogs', blogData,{headers:{Authorization:`Bearer ${token}`}});
      setLoading(true)
      if (response.status == 200) {
        setLoading(false)
        setError(false)
        alert("blog saved successfully!")
        navigate("/blogs")
      }
    } catch (error) {
      setError(true)
    }


  }
  return (
    <div>

      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-6">Create a New Blog</h2>
        <div className='max-h-screen flex items-center justify-center '>

          {error && <p className='text-red-500 text-center mb-2 text-2xl'>Something went wrong!!</p>}
          {loading && <p className='text-red-500 text-center mb-2 text-2xl'>Loading........</p>}
        </div>

        <form className="bg-white shadow-md rounded max-w-lg w-full p-8 flex flex-col">
          {/* Title Input */}
          <input
            type="text"
            name="title"
            placeholder="Enter blog title"
            className="border border-gray-300 px-4 py-2 rounded mb-4 focus:outline-none"
            value={blogData.title}
            onChange={handleChange}
          />

          {/* Content Textarea */}
          <textarea
            name="content"
            placeholder="Write your blog content here..."
            rows={6}
            className="border border-gray-300 px-4 py-2 rounded mb-4 resize-none focus:outline-none"
            value={blogData.content}
            onChange={handleChange}
          />




          {/* Submit Button */}
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600  text-white font-semibold py-2 px-6 rounded"
            onClick={handleFormSubmit}
          >
            Publish Blog
          </button>
        </form>
      </div>

    </div>
  )
}

export default CreateBlog
