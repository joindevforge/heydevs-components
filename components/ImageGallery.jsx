import React, { useState } from 'react';



const data1 = [
    {
        id: 1,
        title:"<80%",
        "desc":"Reduction in hiring costs"
    },
    {
        id: 2,
        title:"500+",
        "desc":"Weekly new “open to work” talents"
    },
    {
        id: 3,
        title:"10x",
        "desc":"More efficient hirings"
    },
    {
        id: 4,
        title:"200+",
        "desc":"Clients"
    }
]

const ImageGallery = () => {
  const [activeImage, setActiveImage] = useState(1);

  const handleHover = (partNumber) => {
    setActiveImage(partNumber);
  };

  return (
    <div className="flex">
      <div className="w-1/2">
        <img
          src={`/assets/companies/${activeImage}.webp`}
          alt={`Image ${activeImage}`}
          className="w-full h-auto"
        />
      </div>
      <div className="w-1/2 flex flex-col">
        {data1.map((part) => (
          <div
            key={part.id}
            className={`flex-1 bg-gray-200 h-[200px] cursor-pointer ${
              activeImage === part.id && 'border-4 border-blue-500'
            }`}
            onMouseEnter={() => handleHover(part.id)}
          >
            {/* You can add any content or styles for each part here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
