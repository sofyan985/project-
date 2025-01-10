/* const NewsCard = ({ title, description, date, imageUrl }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
                src={imageUrl || "/api/placeholder/400/300"}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">{date}</span>
                    <button className="text-blue-600 hover:text-blue-800">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default NewsCard; */

import React, { useState } from 'react';

const NewsCard = ({ title, description, date, imageUrl }) => {
    const [showMore, setShowMore] = useState(false); // State to toggle the visibility of additional text

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
                src={imageUrl || "/api/placeholder/400/300"}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4">
                    {showMore ? description : `${description.slice(0, 100)}...`}
                </p>
                {showMore && (
                    <p className="text-gray-600">
                        {/* Add additional text or extended details here */}
                        More content or extended description goes here.
                    </p>
                )}
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">{date}</span>
                    <button
                        className="text-blue-600 hover:text-blue-800"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? "Show Less" : "Read More"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
