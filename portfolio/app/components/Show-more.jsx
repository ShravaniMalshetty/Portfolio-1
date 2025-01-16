import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar'; // Make sure to adjust this import based on where your Navbar is located.

const ShowMore = () => {
  return (
    <div className="w-full px-[12%] py-10">
      <Navbar /> {/* Include the Navbar component if you need it on this page */}
      <h2 className="text-center text-5xl font-Ovo">All My Works</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Explore more of my projects and discover how I use various technologies to
        solve real-world problems and deliver impactful solutions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {/* Map through your workData or any other project data you want to show on this page */}
        {/* You can reuse the workData array or hardcode new project data for the show-more page */}
        {workData.map((project, index) => (
          <div
            key={index}
            className="w-48 h-48 mx-auto bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group shadow-md"
            style={{
              backgroundImage: `url(${project.bgImage})`,
            }}
          >
            {/* Project Details */}
            <div
              className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between
              duration-500 group-hover:bottom-7"
            >
              <div>
                <h2 className="font-semibold text-sm">{project.title}</h2>
                <p className="text-xs text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-8 h-8 flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image
                  src="/assets/send-icon.png"
                  alt=" "
                  width={20}
                  height={20}
                  className="w-4"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowMore;
