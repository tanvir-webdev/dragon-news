import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { FaEye, FaStar } from "react-icons/fa";
import { MdShare } from "react-icons/md";

const NewsCard = ({ singleNews }) => {
  const data = {
    id: "bcdefa0123456789bcdefa01",
    category_id: 2,
    title: "Bangladesh's Export Earnings Show Strong Growth in Q1 2025",
    rating: {
      number: 4,
      badge: "trending"
    },
    total_view: 6789,
    author: {
      name: "Shirin Akter",
      published_date: "2025-04-22T17:00:00.000Z",
      img: "https://randomuser.me/api/portraits/women/29.jpg"
    },
    thumbnail_url: "https://apparelresources.com/wp-content/uploads/2024/11/Bangladeshs-RMG-exports-decline-by-2.8-per-cent-in-FY-25-Q1-.jpg",
    details:
      "Bangladesh's export sector has demonstrated robust performance in the first quarter of 2025, registering significant growth compared to the same period last year. Key sectors such as readymade garments and leather goods have contributed substantially to this positive trend...",
    tags: ["exports", "economy", "business", "growth", "trade"]
  };

  const formattedDate = new Date(data.author.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const { title, author, thumbnail_url, details, rating, total_view } = singleNews;

  return (
    <div className="card bg-base-100  rounded-none space-y-4 my-7 border border-base-200 mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between bg-base-200 p-4">
        <div className="flex items-center space-x-3">
          <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="text-sm font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className='flex gap-2'>
          <CiBookmark size={24} className="text-xl text-gray-500 cursor-pointer" />
          <MdShare size={24} className="text-xl text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold p-4">{title}</h3>

      {/* Image */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full object-cover max-h-[300px] p-4 rounded-2xl"
      />

      {/* Details */}
      <p className="text-sm text-gray-700 p-3">{details.slice(0, 200)}...</p>
      <a href="#" className="text-orange-600 text-sm font-semibold pl-3">
        Read More
      </a>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm text-gray-600 py-6 px-3">
        <div className="flex items-center space-x-1 text-orange-500">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-700">{rating.number}.0</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
