import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';

const Statistics = () => {
  const [likes, setLikes] = useState(0);
  const visitors = 1050;

  const handleLikeClick = () => setLikes((prevLikes) => prevLikes + 1);

  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="text-white font-bold text-4xl max-md:text-3xl mb-4 max-md:text-center max-md:mb-8 md:block">
        Engagement Metrics
      </h2>
      <p className="text-white text-lg mb-6 hidden md:block">
        Keep track of user interactions and overall activity.
      </p>
      <div className="flex justify-center gap-10 md:flex-row flex-col">
        <div
          className="flex items-center gap-6 cursor-pointer"
          onClick={handleLikeClick}
        >
          {likes > 0 ? (
            <FaHeart className="text-red-500 w-8 h-8 md:w-10 md:h-10" />
          ) : (
            <FaRegHeart className="text-red-500 w-8 h-8 md:w-10 md:h-10" />
          )}
          <span className="text-white text-lg font-medium max-md:text-2xl">
            {likes} Likes
          </span>
        </div>
        <div className="flex items-center gap-6">
          <HiOutlineUserGroup className="text-[#915EFF] w-8 h-8 md:w-10 md:h-10" />
          <span className="text-white text-lg font-medium max-md:text-2xl">
            {visitors} Visitors
          </span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
