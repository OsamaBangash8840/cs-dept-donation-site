import React from 'react';
import islamia from '../assest/islamiaImg.jpeg';
import DonateBtn from '../DonateBtn';
import { TokenProvider } from '../context/TokenSecret';
const Card = ({ title, text, buttonText }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-28 mx-4 md:mx-0 ml-10 ">
      <div className="w-full md:w-1/3 h-auto md:h-[495px] p-4 shadow-lg rounded-lg bg-gray-200 mb-6  md:mb-0">
        <h1 className="text-2xl md:text-3xl font-bold mt-6">{title}</h1>
        <p className="text-gray-700 mb-4 text-base md:text-lg tracking-wide font-sans mt-6">{text}</p>
        <TokenProvider>
          <DonateBtn />
        </TokenProvider>
      </div>
      <div className="w-full md:w-1/2 p-4 ml-0 md:ml-28 ">
        <img className="w-full h-64 md:h-full object-cover rounded-lg" src={islamia} alt="img" />
      </div>
    </div>
  );
};

export default Card;
