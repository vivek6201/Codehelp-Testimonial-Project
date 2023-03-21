import React, { useState } from "react";
import reviews from "../data";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const generateRandomCard = () => {
    const random = Math.floor(Math.random() * reviews.length);
    setIndex(random);
  };

  const leftShiftHandler = () =>{
    if(index === 0){
        setIndex(reviews.length - 1);
    }
    else{
        setIndex(index-1);
    }
  }

  const rightShiftHandler = () =>{
    if(index + 1 >= reviews.length){
        setIndex(0);
    }
    else{
        setIndex(index+1);
    }
  }

  return (
    <div className="w-[800px] h-[500px] bg-white rounded-md flex flex-col relative gap-y-4 px-5 py-2 shadow-2xl shadow-slate-500">
      <div className="absolute -top-16 left-12">
        <img
          src={reviews[index].image}
          className="w-36 aspect-square rounded-full shadow-2xl shadow-gray-700"
        />
      </div>
      <div className="flex flex-col items-center justify-around w-full h-full">
        <h2 className="text-2xl font-bold translate-y-4">{reviews[index].name}</h2>
        <p className="-translate-y-7 opacity-70">{reviews[index].job}</p>
        <FaQuoteLeft color="gray" />
        <p className="text-center opacity-70">{reviews[index].text}</p>
        <FaQuoteRight color="gray" />

        <div className="flex gap-5">
          <div onClick={leftShiftHandler} className="cursor-pointer">
            <BsChevronLeft size={20} color="gray" />
          </div>
          <div onClick={rightShiftHandler} className="cursor-pointer">
            <BsChevronRight size={20} color="gray" />
          </div>
        </div>

        <button
          className="px-5 py-2 rounded-md bg-gray-500 text-white"
          onClick={generateRandomCard}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
