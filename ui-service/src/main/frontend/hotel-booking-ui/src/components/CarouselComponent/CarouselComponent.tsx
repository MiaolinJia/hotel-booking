import Slider from "react-slick";
import "./carouselComponent.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import {
  ArrowProps,
  CarouselComponentProps,
} from "../../types/CarouselComponentTypes";
import React from "react";

const FeaturedBundleComponent = ({
  children,
  title = "Carousel",
  sliderSettings = {},
}: CarouselComponentProps) => {
  const defaultSettings = {
    dots: false,
    infinite: false,
    draggable: false,
    arrows: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings = { ...defaultSettings, ...sliderSettings };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {title && (
        <h2 className="text-2xl font-bold text-blue-900 mb-6">{title}</h2>
      )}
      <div className="relative">
        <Slider {...settings}>
          {React.Children.map(children, (child, index) => (
            <div key={index} className="px-2">
              {child}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedBundleComponent;

const NextArrow: React.FC<ArrowProps> = ({ className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        ${className}
        w-[52px] h-[52px]
        !border
        !border-slate-100
        rounded-full
        bg-white
        shadow-md 
        transition-all duration-300 ease-in-out
        flex items-center justify-center
        cursor-pointer
        hover:bg-gray-100
        hover:border-slate-200
      `}
    >
      <FaAngleRight className="w-5 h-5 text-blue-600 hover:text-blue-800" />
    </div>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
          ${className}
          w-[52px] h-[52px]
          !border
          !border-slate-100
          rounded-full
          bg-white
          shadow-md 
          transition-all duration-300 ease-in-out
          flex items-center justify-center
          cursor-pointer
          hover:bg-gray-100
          hover:border-slate-200
          z-10 
        `}
    >
      <FaAngleLeft className="w-5 h-5 text-blue-600 hover:text-blue-800" />
    </div>
  );
};
