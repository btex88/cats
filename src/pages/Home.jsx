import React from 'react';
import StatusButton from '../components/StatusButton';
import { statusMessages } from '../data';

const Home = () => (
  <div className="flex flex-col">
    <span className="text-4xl text-center my-8 select-none font-sans subpixel-antialiased">
    HTTP Cats Status
    </span>
    <div className="flex flex-row flex-wrap content-center items-center justify-items-center justify-evenly mx-16">
      {statusMessages.map((value) => (
        <StatusButton
          key={value.status}
          statusLabel={value.label}
          statusCode={value.status}
        />
      ))}
    </div>
  </div>
);

export default Home;
