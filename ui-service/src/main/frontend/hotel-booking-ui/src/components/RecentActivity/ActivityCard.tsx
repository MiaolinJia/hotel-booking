import { ActivityCardProps } from "./types";

const ActivityCard = ({ activity, onDelete }: ActivityCardProps) => {
  return (
    <div>
      <h3>{activity.type}</h3>
      <p>
        {activity.city}, {activity.state}
      </p>
      <p>
        {activity.startDate} - {activity.endDate}
      </p>
      <button onClick={() => onDelete(activity.id)}>Delete</button>
    </div>
  );
};

export default ActivityCard;
