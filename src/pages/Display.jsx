import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const Display = () => {
  const params = useParams();
  return (
    <div className="">
      <Link to="/">
        <BiArrowBack className="absolute top-4 left-4 text-4xl" />
      </Link>
      <img
        src={`https://http.cat/${params.id}.jpg`}
        alt={`Status: ${params.id}`}
        className="object-scale-down h-108 object-center mx-auto mt-24"
      />
    </div>
  );
};

export default Display;
