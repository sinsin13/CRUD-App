import React from 'react'

const Home = () => {
  return (
    <div className='w-full px-5 py-10 min-h-[calc(100vh-60px)] bg-gray-100'>

        <div className='max-w-6xl w-full mx-auto bg-white rounded-xl shadow-md p-8'>
            <h2 className='text-2xl font-bold text-gray-800 mb-6'>Add Book</h2>

            <div className='w-full flex gap-5'>
                <div className='flex-1 min-w-0 flex flex-col gap-1'>
                    <label htmlFor="bookName" className='text-sm font-medium text-gray-600'>Book Name</label>
                    <input id="bookName" type="text" placeholder='Book Name'
                        className='w-full min-w-0 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-gray-800'/>
                </div>

                <div className='flex-1 min-w-0 flex flex-col gap-1'>
                    <label htmlFor="bookTitle" className='text-sm font-medium text-gray-600'>Book Title</label>
                    <input id="bookTitle" type="text" placeholder='Book Title'
                        className='w-full min-w-0 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-gray-800'/>
                </div>

                <div className='flex-1 min-w-0 flex flex-col gap-1'>
                    <label htmlFor="author" className='text-sm font-medium text-gray-600'>Author</label>
                    <input id="author" type="text" placeholder='Author'
                        className='w-full min-w-0 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-gray-800'/>
                </div>

                <div className='flex-1 min-w-0 flex flex-col gap-1'>
                    <label htmlFor="price" className='text-sm font-medium text-gray-600'>Price</label>
                    <input id="price" type="text" placeholder='Price'
                        className='w-full min-w-0 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-gray-800'/>
                </div>

                <div className='flex-1 min-w-0 flex flex-col gap-1'>
                    <label htmlFor="publishedDate" className='text-sm font-medium text-gray-600'>Published Date</label>
                    <input id="publishedDate" type="date" placeholder='Published Date'
                        className='w-full min-w-0 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-gray-800'/>
                </div>
            </div>

            <button className='mt-8 bg-gray-800 text-white font-medium px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer'>
                Save Book
            </button>

            <div className='mt-10 w-full'>
                <table className='w-full border border-gray-500 rounded-lg overflow-hidden'>
                    <thead className='bg-gray-200'>
                        <tr>
                            <th className='text-left text-gray-600 font-medium px-4 py-2 tracking-wider uppercase'>Book Name</th>
                            <th className='text-left text-gray-600 font-medium px-4 py-2 tracking-wider uppercase'>Book Title</th>
                            <th className='text-left text-gray-600 font-medium px-4 py-2 tracking-wider uppercase'>Author</th>
                            <th className='text-left text-gray-600 font-medium px-4 py-2 tracking-wider uppercase'>Price</th>
                            <th className='text-left text-gray-600 font-medium px-4 py-2 tracking-wider uppercase'>Published Date</th>
                            <th className='text-left text-gray-600 font-medium px-4 py-2 tracking-wider uppercase'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className=' border-gray-500 rounded-lg overflow-hidden'>
                        <tr className='hover:bg-gray-100 transition-colors'>
                            <td className='px-4 py-2 text-gray-700'>Book Name</td>
                            <td className='px-4 py-2 text-gray-700'>Book Title</td>
                            <td className='px-4 py-2 text-gray-700'>Author</td>
                            <td className='px-4 py-2 text-gray-700'>Price</td>
                            <td className='px-4 py-2 text-gray-700'>Published Date</td>
                            <td className='px-4 py-2 text-gray-700'>
                                <button className='bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-400 transition-colors mr-2 cursor-pointer'>Edit</button>
                                <button className='bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-400 transition-colors cursor-pointer'>Delete</button>
                            </td>
                        
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
  )
}

export default Home