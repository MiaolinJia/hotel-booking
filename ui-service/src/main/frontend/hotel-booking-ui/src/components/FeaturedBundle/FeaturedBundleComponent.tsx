import Slider from "react-slick";
import FeaturedBundleCard from "./FeaturedBundleCard";
import "./featuredBundle.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const FeaturedBundleComponent = ({ bundles }) => {
  const settings = {
    dots: false,
    infinite: false,
    draggable: false,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        Don't miss these hotel + flight deals
      </h2>
      <div className="relative">
        <Slider {...settings}>
          {bundles.map((bundle, index) => (
            <div key={index} className="px-2">
              <FeaturedBundleCard {...bundle} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedBundleComponent;

function SampleNextArrow({ className, onClick }) {
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
}

function SamplePrevArrow({ className, onClick }) {
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
}
