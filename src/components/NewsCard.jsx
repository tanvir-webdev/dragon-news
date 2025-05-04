import React from 'react';

import { FaRegBookmark, FaBookmark, FaRegEye, FaRegStar, FaStar, FaFire } from 'react-icons/fa';
import { IoMdTrendingUp } from 'react-icons/io';

const NewsCard = ({ singleNews }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    published_date,
    others
  } = singleNews;

  // Format date
  const formattedDate = new Date(published_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {/* Image */}
      <figure className="relative">
        <img 
          src={thumbnail_url} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-2">
          {others?.is_today_pick && (
            <div className="badge badge-error gap-2 text-white">
              <FaFire /> Today's Pick
            </div>
          )}
          {others?.is_trending && (
            <div className="badge badge-warning gap-2 text-white">
              <IoMdTrendingUp size={14} /> Trending
            </div>
          )}
        </div>
      </figure>

      {/* Card Body */}
      <div className="card-body p-4">
        {/* Title */}
        <h2 className="card-title text-lg line-clamp-2">
          {title}
        </h2>

        {/* Author Info */}
        <div className="flex items-center gap-3 mt-2">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium">{author.name}</p>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        {/* Rating and Views */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-1">
            <div className="rating rating-sm">
              {[...Array(5)].map((_, i) => (
                i < rating.number ? 
                  <FaStar key={i} className="text-yellow-400" /> : 
                  <FaRegStar key={i} className="text-gray-300" />
              ))}
            </div>
            <span className="text-sm ml-1">{rating.number}</span>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <FaRegEye />
            <span>{total_view.toLocaleString()}</span>
          </div>
        </div>

        {/* Tags (optional) */}
        <div className="flex flex-wrap gap-1 mt-3">
          {singleNews.tags?.slice(0, 3).map((tag, index) => (
            <span key={index} className="badge badge-outline text-xs">
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-sm btn-outline">Read More</button>
          <button className="btn btn-sm btn-ghost">
            <FaRegBookmark />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;