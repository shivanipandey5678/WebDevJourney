import React,{useState} from 'react'

const EditBlog = () => {
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(false);
       const [blogData, setBlogData] = useState({
          title: '',
          content: ''
        })
         function handleChange(e){
            const {name,value}=e.target;
            setBlogData({...blogData,[name]:value})
         }
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-6">Edit Blog</h2>

            <div className='max-h-screen flex items-center justify-center '>
                {error && <p className='text-red-500 text-center mb-2 text-2xl'>Something went wrong!!</p>}
                {loading && <p className='text-red-500 text-center mb-2 text-2xl'>Loading........</p>}
            </div>

            <form className="bg-white shadow-md rounded max-w-lg w-full p-8 flex flex-col">
                <input
                    type="text"
                    name="title"
                    placeholder="Edit blog title"
                    className="border border-gray-300 px-4 py-2 rounded mb-4 focus:outline-none"
                    value={blogData.title}
                    onChange={handleChange}
                />

                <textarea
                    name="content"
                    placeholder="Edit blog content here..."
                    rows={6}
                    className="border border-gray-300 px-4 py-2 rounded mb-4 resize-none focus:outline-none"
                    value={blogData.content}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded"
                   
                >
                    Update Blog
                </button>
            </form>
        </div>

    )
}

export default EditBlog
