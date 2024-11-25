import { RecentSearchCardProps } from "../../types/RecenSearchTypes";
import { MdClose, MdHotel } from "react-icons/md";

const RecentSearchCard = ({ search, onDelete }: RecentSearchCardProps) => {
  function capitalizeWords(str: string) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  return (
    <div className="flex-shrink-0 w-64 bg-blue-50 rounded-lg px-2 border border-stale-100 relative shadow-md hover:shadow-[rgba(0,0,0,0.4)] cursor-pointer">
      <button
        onClick={() => onDelete(search.id)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        <MdClose />
      </button>
      <div className="flex flex-row items-center  gap-2">
        <div className="flex items-center justify-center w-[52px] h-[52px] text-blue-500 rounded-full bg-blue-200">
          <MdHotel className="w-[36px] h-[36px] text-blue-500" />
        </div>
        <div className="flex flex-col items-start my-2">
          <div>
            <h3 className="font-bold text-gray-800 mb-1">
              {capitalizeWords(search.destination)}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {formatDate(search.startDate)} - {formatDate(search.endDate)}
            </p>
            {/* TODO: Handle plural, maybe with localization */}
            <p className="text-sm text-gray-600 mb-2">
              {search.adults} adult
              {search.children ? `, ${search.children} child` : ""}
              {search.rooms ? `, ${search.rooms} room` : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentSearchCard;
