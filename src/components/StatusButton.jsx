import React from 'react';
import { Link } from 'react-router-dom';

const StatusButton = ({ statusLabel, statusCode }) => {
  return (
    <Link to={`/status/${statusCode}`}>
      <button
        className="bg-transparent hover:bg-red-700 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded m-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 select-none cursor-pointer"
        type="button"
      >
        {statusLabel}
      </button>
    </Link>
  );
};
export default StatusButton;
