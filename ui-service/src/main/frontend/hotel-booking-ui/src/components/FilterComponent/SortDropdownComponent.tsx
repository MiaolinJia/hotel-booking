
import { ChevronDown, Check } from 'lucide-react';
import {useState} from "react";

interface SortOption {
    id: string;
    label: string;
}

const sortOptions: SortOption[] = [
    { id: 'recommended', label: 'Recommended' },
    { id: 'lowest-price', label: 'Lowest Price' },
    { id: 'guest-rating', label: 'Guest Rating + Number of Reviews' },
    { id: 'nearby', label: 'Nearby' }
];

const SortDropdownComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(sortOptions[0]);

    return (
        <div className="w-full max-w-md relative p-4">
            <div className="text-base leading-6 font-bold mb-2">Sort by</div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-4 text-left flex items-center justify-between rounded-2xl border border-blue-500 text-sm"
            >
                <span>{selectedOption.label}</span>
                <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div className="absolute w-full mt-2 bg-white rounded-2xl shadow-lg border border-gray-100 py-2 z-50">
                    {sortOptions.map((option) => (
                        <button
                            key={option.id}
                            className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors ${
                                selectedOption.id === option.id
                                    ? 'bg-blue-600 text-white'
                                    : 'hover:bg-gray-100'
                            }`}
                            onClick={() => {
                                setSelectedOption(option);
                                setIsOpen(false);
                            }}
                        >
                            <span className="text-sm">{option.label}</span>
                            {selectedOption.id === option.id && (
                                <Check className="w-5 h-5 text-white" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SortDropdownComponent;