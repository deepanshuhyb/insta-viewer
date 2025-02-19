import React, { useState, useEffect } from 'react';

function Skeleton() {
  return (
    <div className="animate-pulse flex flex-col items-center">
      <div className="bg-gray-300 rounded-lg w-48 h-80 md:h-96"></div>
    </div>
  );
}

function ProfileCard({ info = {} }) {  // Default to empty object
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
      <img
        src={info.dp || "https://via.placeholder.com/100"} // Default image
        alt="Profile"
        className="w-20 h-20 rounded-full border"
      />
      <h2 className="text-lg font-semibold mt-2">{info.fullName || "Unknown"}</h2>
      {info.biography ? (
        <p className="text-gray-600 text-sm mt-1">{info.biography}</p>
      ) : (
        <p className="text-gray-400 text-sm mt-1">No bio available</p>
      )}
    </div>
  );
}


function GetRez({ links, info }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); // Simulated loading time
  }, []);

  return (
    <div className="py-10 flex flex-col items-center">
      {<ProfileCard info={info} />}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-16 mt-6">
        {loading
          ? Array(4).fill(0).map((_, i) => <Skeleton key={i} />)
          : links.map((link, index) => (
              <div key={index} className="flex flex-col items-center">
                {link.video ? (
                  <video src={link.video} controls className="rounded-lg w-48 h-80" />
                ) : link.image ? (
                  <img src={link.image} alt="Content" className="rounded-lg h-80 w-48 md:h-96" />
                ) : null}
              </div>
            ))}
      </div>
    </div>
  );
}

export default GetRez;
