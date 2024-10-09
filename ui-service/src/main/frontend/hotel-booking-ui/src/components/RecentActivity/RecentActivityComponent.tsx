import { RecentActivityProps } from "./types";

const RecentActivityComponent = ({
  children,
  activities,
}: RecentActivityProps) => {
  if (activities.length === 0) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white p-6 rounded-lg shadow-sm bg-blue-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="inline-block align-middle text-2xl font-bold text-blue-900 mb-6">
          Pick up where you left off
        </h2>
        <div>
          <span className="inline-block align-middle bg-white rounded-full p-4  text-blue-500 cursor-pointer hover:bg-slate-50 hover:text-blue-600">
            View All Recent Activity
          </span>
        </div>
      </div>
      <div className="flex space-x-4 overflow-x-auto pb-4">{children}</div>
    </div>
  );
};

export default RecentActivityComponent;
