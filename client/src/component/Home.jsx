import React from "react";

const Home = () => {
  return (
    <div className="w-full px-5 min-h-[calc(100vh-60px)] gap-10 py-5 flex flex-col">

      <div className="w-full grid grid-cols-5 gap-3">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor=""> Book Name</label>
          <input type="text" placeholder="Book Name" className="w-full border border-gray-100  border-r-2-gray-500 rounded-sm outline-1 outline-gray-500 h-10  px-2"/>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor=""> Book Title</label>
          <input type="text" placeholder="Book Title" className="w-full border border-gray-100 border-r-2  rounded-sm outline-1 outline-gray-500 h-10 px-2"/>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor=""> Author</label>
          <input type="text" placeholder="Author" className="w-full border border-gray-100 border-r-2  rounded-sm outline-1 outline-gray-500 h-10 px-2"/>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor=""> Selling Price</label>
          <input type="text" placeholder="Selling Price" className="w-full border border-gray-100 border-r-2  rounded-sm outline-1 outline-gray-500 h-10 px-2"/>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor=""> Publish Date</label>
          <input type="date" placeholder="Publish Date" className="w-full border border-gray-100 border-r-2  rounded-sm outline-1 outline-gray-500 h-10 px-2"/>
        </div>
      </div>

      <div className="w-full flex justify-end">
        <button className="bg-pink-500 text-white px-5 py-2 rounded-sm">Submit</button>
      </div>

      <div className="w-full mt-10">
        <div>

            <table className="w-full border-collapse border border-gray-300">

                {/* HEADER OF THE TABLE */}
                <thead>
                    <tr className="bg-pink-100">
                        <th className="tracking-wider border border-gray-300 px-4 py-2">Book Name</th>
                        <th className="tracking-wider border border-gray-300 px-4 py-2">Book Title</th>
                        <th className="tracking-wider border border-gray-300 px-4 py-2">Author</th>
                        <th className="tracking-wider border border-gray-300 px-4 py-2">Selling Price</th>
                        <th className="tracking-wider border border-gray-300 px-4 py-2">Publish Date</th>
                        <th className="tracking-wider border border-gray-300 px-4 py-2">Action</th>   
                    </tr>
                </thead>

                {/* BODY OF THE TABLE */}
                <tbody className="w-full border-collapse border border-gray-300">
                    <tr className="hover:bg-gray-200">
                        <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">The Great Gatsby</td>
                        <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">Book Title</td>
                        <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">F. Scott Fitzgerald</td>
                        <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">$10.99</td>
                        <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">April 10, 1925</td>
                        <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">Action</td>
                    </tr>
                    <tr className="hover:bg-gray-200">
                        <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">To Kill a Mockingbird</td>
                        <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">Book Title</td>
                        <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">Harper Lee</td>
                        <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">$12.99</td>
                        <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">July 11, 1960</td>
                        <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">Action</td>
                    </tr>
                    <tr className="hover:bg-gray-200">
                        <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">1984</td>
                        <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">Book Title</td>
                        <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">George Orwell</td>
                        <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">$9.99</td>
                        <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">June 8, 1949</td>
                        <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">Action</td>
                    </tr>
                </tbody>


            </table>


        </div>
      </div>

    </div>

  );
};

export default Home;
