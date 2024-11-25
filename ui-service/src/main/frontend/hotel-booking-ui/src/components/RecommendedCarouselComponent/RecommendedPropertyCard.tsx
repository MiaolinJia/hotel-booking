import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { MdOutlineThumbUp } from "react-icons/md";
import { RecommendedProperty } from "../../types/RecommendedCarouselComponentTypesypes";
import { Box, Card, CardContent, Skeleton, Tooltip } from "@mui/material";

const RecommendedPropertyCard: React.FC<RecommendedProperty> = ({
  cityName,
  imageUrl,
  propertyName,
  propertyType,
  isGenius,
  nbWishList,
  review,
  price,
}: RecommendedProperty) => {
  return (
    <div
      className="w-65 h-96 mb-2 rounded-lg overflow-hidden shadow-md flex flex-col 
    cursor-pointer hover:shadow-[rgba(0,0,0,0.4)] transition-shadow duration-300"
    >
      <div className="relative h-48">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={propertyName}
        />
        {nbWishList == 0 ? (
          <></>
        ) : nbWishList == 1 ? (
          <Tooltip title={"Save to wish list"} placement="top">
            <button className="absolute top-2 right-2 p-2 bg-white rounded-full hover:bg-slate-50">
              <FaRegHeart className="h-6 w-6 text-gray-600" />
            </button>
          </Tooltip>
        ) : (
          <Tooltip title={"In wish list"} placement="top">
            <button className="absolute top-2 right-2 p-2 bg-white rounded-full hover:bg-slate-50">
              <FaHeart className="h-6 w-6 text-red-600" />
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
          {propertyName}
        </div>
        {cityName && <p className="text-gray-700 text-base mb-2">{cityName}</p>}
        <div className="mt-auto">
          <div className="flex items-center">
            <span className="bg-blue-500 text-white font-bold py-1 px-2 rounded">
              {review?.rateScore}
            </span>
            <span className="ml-2 text-sm text-gray-600">
              {review?.rateText} · {review?.formattedReviewCount} reviews
            </span>
          </div>
          {price && (
            <div className="mt-2 text-right">
              {price.formattedCrossedOutPrice && (
                <span className="line-through text-gray-500 mr-2">
                  {price.formattedCrossedOutPrice}
                </span>
              )}
              <span className="font-bold text-lg">{price.formattedPrice}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecommendedPropertyCard;

export const FeaturedPropertyCardSkeleton: React.FC = () => {
  return (
    <Card
      sx={{
        width: 260,
        height: 384,
        mb: 1,
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0px 0px 15px rgba(0,0,0,0.3)",
        },
        transition: "box-shadow 0.3s",
      }}
    >
      <Box sx={{ position: "relative", height: 192 }}>
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </Box>
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          py: 1,
          px: 1,
        }}
      >
        <Skeleton variant="text" width="90%" height={28} sx={{ mb: 1 }} />
        <Skeleton variant="text" width="60%" height={28} sx={{ mb: 1 }} />
        <Box sx={{ mt: "auto" }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Skeleton variant="rounded" width={36} height={28} sx={{ mr: 1 }} />
            <Skeleton variant="text" width="70%" />
          </Box>
          <Box sx={{ textAlign: "right" }}>
            <Skeleton variant="text" width="40%" sx={{ ml: "auto" }} />
            <Skeleton
              variant="text"
              width="30%"
              height={28}
              sx={{ ml: "auto" }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
