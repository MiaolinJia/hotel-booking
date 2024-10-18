import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineThumbUp } from "react-icons/md";
import { FeaturedProperty } from "./types";
import { Tooltip } from "@mui/material";

const FeaturedPropertyCard: React.FC<FeaturedProperty> = ({
  image,
  showWishlist = false,
  propertyType = null,
  isGenius = false,
  name,
  location = null,
  rating,
  reviewCount,
  price = null,
  originalPrice = null,
}) => {
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const getRatingDescription = (rating: number) => {
    if (rating >= 9) return "Excellent";
    if (rating >= 8) return "Very Good";
    if (rating >= 7) return "Good";
    if (rating >= 6) return "Pleasant";
    return "Fair";
  };

  return (
    <div
      className="w-65 h-96 mb-2 rounded-lg overflow-hidden shadow-md flex flex-col 
    cursor-pointer hover:shadow-[rgba(0,0,0,0.4)] transition-shadow duration-300"
    >
      <div className="relative h-48">
        <img className="w-full h-full object-cover" src={image} alt={name} />
        {showWishlist && (
          <Tooltip title={"Save to wish list"} placement="top">
            <button className="absolute top-2 right-2 p-2 bg-white rounded-full hover:bg-slate-50">
              <FaRegHeart className="h-6 w-6 text-gray-600" />
            </button>
          </Tooltip>
        )}
      </div>
      <div className="px-2 py-2 flex-grow flex flex-col">
        {propertyType && (
          <div className="flex items-center mb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {propertyType}
            </span>
            {isGenius && (
              <Tooltip
                title={"This is our featured property. Blah blah."}
                enterNextDelay={500}
                leaveDelay={200}
              >
                <div>
                  <MdOutlineThumbUp className="h-5 w-5 text-blue-500" />
                </div>
              </Tooltip>
            )}
          </div>
        )}
        <div className="font-bold text-xl mb-2 line-clamp-2 overflow-hidden">
          {name}
        </div>
        {location && <p className="text-gray-700 text-base mb-2">{location}</p>}
        <div className="mt-auto">
          <div className="flex items-center">
            <span className="bg-blue-500 text-white font-bold py-1 px-2 rounded">
              {rating.toFixed(1)}
            </span>
            <span className="ml-2 text-sm text-gray-600">
              {getRatingDescription(rating)} · {formatNumber(reviewCount)}{" "}
              reviews
            </span>
          </div>
          {price && (
            <div className="mt-2 text-right">
              {originalPrice && (
                <span className="line-through text-gray-500 mr-2">
                  ${formatNumber(originalPrice)}
                </span>
              )}
              <span className="font-bold text-lg">${formatNumber(price)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPropertyCard;
