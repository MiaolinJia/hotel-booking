import { ActivityCardProps } from "./types";
import { MdFlight, MdHotel, MdClose } from "react-icons/md";

const ActivityCard = ({ activity, onDelete }: ActivityCardProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "flight":
        return (
          <MdFlight className="w-[52px] h-[52px] text-blue-500 rounded-full bg-blue-200" />
        );
      case "hotel":
        return <MdHotel className="w-[36px] h-[36px] text-blue-500" />;
      default:
        return <div className="w-[52px] h-[52px] bg-blue-500 rounded-full" />;
    }
  };

  return (
    <div className="flex-shrink-0 w-64 bg-blue-50 rounded-lg px-2 border border-stale-100 relative shadow-md hover:shadow-[rgba(0,0,0,0.4)] cursor-pointer">
      <button
        onClick={() => onDelete(activity.id)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        <MdClose />
      </button>
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center justify-center w-[52px] h-[52px] text-blue-500 rounded-full bg-blue-200">
          {getIcon(activity.type)}
        </div>
        <div className="flex flex-col items-start my-2">
          <span className="text-blue-600 font-semibold">{activity.type}</span>
          <div>
            <h3 className="font-bold text-gray-800 mb-1">
              {activity.city}, {activity.state}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {activity.startDate} - {activity.endDate}
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
