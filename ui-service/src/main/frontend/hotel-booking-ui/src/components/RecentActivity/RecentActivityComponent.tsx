import { RecentActivityProps } from "./types";

const RecentActivityComponent = ({
  children,
  activities,
}: RecentActivityProps) => {
  if (activities.length === 0) {
    return null;
  }

  return (
    <div>
      <h2>Pick up where you left off</h2>
      {children}
    </div>
  );
};

export default RecentActivityComponent;
