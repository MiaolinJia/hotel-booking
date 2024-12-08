import React, { useState } from 'react';
import { DollarSign } from 'lucide-react';

interface SavingsModeProps {
    onToggle?: (enabled: boolean) => void;
    numDeals: number;
}

const SavingsModeComponent: React.FC<SavingsModeProps> = ({ onToggle, numDeals }) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const handleToggle = () => {
        const newState = !isEnabled;
        setIsEnabled(newState);
        onToggle?.(newState);
    };

    return (
        <div className="">
            <div className="flex items-center justify-between mb-4">
                <div className="text-base font-bold text-gray-900">Savings Mode</div>
                <button
                    onClick={handleToggle}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-200 ease-in-out ${
                        isEnabled ? 'bg-blue-600' : 'bg-gray-400'
                    }`}
                >
          <span
              className={`inline-flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-lg transform transition-transform duration-200 ease-in-out ${
                  isEnabled ? 'translate-x-7' : 'translate-x-1'
              }`}
          >
            <DollarSign className={`h-4 w-4 ${isEnabled ? 'text-blue-600' : 'text-gray-400'}`} />
          </span>
                </button>
            </div>

            <p className="text-xs text-gray-600">
                {isEnabled
                    ? `${numDeals} deals found! Find them under various search results (you may need to scroll to see them).`
                    : "Turn this on to instantly reveal the best deals that match each hotel."
                }
            </p>
        </div>
    );
};

export default SavingsModeComponent;