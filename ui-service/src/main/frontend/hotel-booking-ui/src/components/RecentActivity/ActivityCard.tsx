import { ActivityCardProps } from "./types";
import { MdHotel, MdClose } from "react-icons/md";

const ActivityCard = ({ activity, onDelete }: ActivityCardProps) => {
  function capitalizeWords(str: string) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  return (
    <div className="flex-shrink-0 w-64 bg-blue-50 rounded-lg px-2 border border-stale-100 relative shadow-md hover:shadow-[rgba(0,0,0,0.4)] cursor-pointer">
      <button
        onClick={() => onDelete(activity.id)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        <MdClose />
      </button>
      <div className="flex flex-row items-center  gap-2">
        <div className="flex items-center justify-center w-[52px] h-[52px] text-blue-500 rounded-full bg-blue-200">
          <MdHotel className="w-[36px] h-[36px] text-blue-500" />
        </div>
        <div className="flex flex-col items-start my-2">
          <span className="text-blue-600 font-semibold">hotel</span>
          <div>
            <h3 className="font-bold text-gray-800 mb-1">
              {capitalizeWords(activity.destination)},{" "}
              {activity.destination.toUpperCase()}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {activity.startDate.toDateString()} -{" "}
              {activity.endDate.toDateString()}
            </p>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center text-blue-500 mt-2">
        <span className="mr-1">View details</span>
      </div> */}
    </div>
  );
};

export default ActivityCard;
