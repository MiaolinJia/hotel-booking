import { RecommendedBundle } from "../../types/RecommendedCarouselComponentTypesypes";
import { MdFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { Box, Card, CardContent, Skeleton } from "@mui/material";

const RecommendedBundleCard = ({
  cityName,
  cityImageUrl,
  priceAmount,
  startDate,
  endDate,
}: RecommendedBundle) => {
  const formatDateRange = (startDate: string, endDate: string): string => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "2-digit",
    };
    return `${start.toLocaleDateString(
      "en-US",
      options
    )} - ${end.toLocaleDateString("en-US", options)}`;
  };

  const numberOfNights = Math.ceil(
    (new Date(endDate).getTime() - new Date(startDate).getTime()) /
      (1000 * 60 * 60 * 24)
  );

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-[rgba(0,0,0,0.4)] transition-shadow duration-300">
      <div className="h-40 bg-gray-300 relative overflow-hidden">
        <img
          src={cityImageUrl}
          alt={cityName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
        <div className="absolute top-2 left-0 bg-blue-600 text-white px-2 py-1 rounded-r-full">
          Hotel + Flight
        </div>
        <h3 className="absolute bottom-2 left-2 text-white text-xl font-bold drop-shadow-md">
          {cityName}
        </h3>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-2">
          {formatDateRange(startDate, endDate)}
        </p>
        <div className="flex items-center mb-2 gap-2">
          <MdFlight className="text-blue-600" />
          <p>Round-trip flight</p>
        </div>
        <div className="flex items-center mb-4 gap-2">
          <FaHotel className="text-blue-600" />
          <p>Hotel for {numberOfNights} Nights</p>
        </div>
        <div className="flex justify-between content-end">
          <div>
            <span className="inline-block align-middle bg-green-100 px-2  text-green-800 font-semibold rounded-full">
              BUNDLE & SAVE
            </span>
            <p className="text-sm pt-3">
              {numberOfNights} nights hotel + Round-trip flight
            </p>
          </div>

          <div className="text-right">
            <p className="text-2xl font-bold">${priceAmount}</p>
            <span className="text-sm font-normal">per person</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedBundleCard;

export const RecommendedBundleSkeleton = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Skeleton variant="rectangular" height={160} />

        <Box
          sx={{
            position: "absolute",
            bottom: 8,
            left: 8,
          }}
        >
          <Skeleton variant="text" width={120} height={32} />
        </Box>
      </Box>
      <CardContent>
        <Skeleton variant="text" width="60%" />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 1 }}>
          <Skeleton variant="circular" width={24} height={24} />
          <Skeleton variant="text" width="40%" />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          <Skeleton variant="circular" width={24} height={24} />
          <Skeleton variant="text" width="50%" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Box>
            <Skeleton
              variant="rectangular"
              width={80}
              height={24}
              sx={{ borderRadius: 12 }}
            />
            <Skeleton variant="text" width={120} sx={{ mt: 1 }} />
          </Box>
          <Box sx={{ textAlign: "right" }}>
            <Skeleton variant="text" width={60} height={32} />
            <Skeleton variant="text" width={80} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
