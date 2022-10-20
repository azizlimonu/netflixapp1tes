import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";

const Row = ({ title, fetchURL, rowID }) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setFilms(res.data.results);
    });
  }, [fetchURL]);

  const slider = document.getElementById("slider" + rowID);
  // const rightSlide = document.getElementById('rightArrow');
  // const leftSlide = document.getElementById('leftArrow');
  // const movieSlide = document.getElementById('slideMovie')
  // soon gonna update the infinte scroll
  
  const slideLeft = () => {
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        {/* arrow left slide */}
        <MdChevronLeft
          id="leftArrow"
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {/* the movies */}
          {films?.map((item, i) => (
            <Movie id="slideMovie" key={i} item={item} />
          ))}
        </div>

        {/* arrow right slide */}
        <MdChevronRight
          id="rightArrow"
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
