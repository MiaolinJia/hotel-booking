import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface PropertyType {
    id: string;
    name: string;
    count: number;
}

interface PropertyTypesProps {
    onSelectionChange?: (selectedTypes: string[]) => void;
}

const propertyTypes: PropertyType[] = [
    { id: 'hotels', name: 'Hotels', count: 27 },
    { id: 'inns', name: 'Inns', count: 6 },
    { id: 'holiday-homes', name: 'Holiday homes', count: 1 },
    { id: 'guesthouses', name: 'Guesthouses', count: 1 },
];

const PropertyTypesFilterComponent: React.FC<PropertyTypesProps> = ({ onSelectionChange }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const handleCheckboxChange = (typeId: string) => {
        const updatedSelection = selectedTypes.includes(typeId)
            ? selectedTypes.filter(id => id !== typeId)
            : [...selectedTypes, typeId];

        setSelectedTypes(updatedSelection);
        onSelectionChange?.(updatedSelection);
    };

    return (
        <div className="border-b border-gray-200 mx-2">
            <button
                onClick={handleToggle}
                className="w-full p-2 flex items-center justify-between text-left"
            >
                <div className="text-base font-bold text-gray-900 mx-0">Property Types</div>
                {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
            </button>

            {isExpanded && (
                <div className="space-y-2 bg-white rounded-lg">
                    {propertyTypes.map((type) => (
                        <label
                            key={type.id}
                            className="group flex items-center justify-between py-3 cursor-pointer hover:bg-gray-100 px-4 rounded text-base transition-colors duration-200"
                        >
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        checked={selectedTypes.includes(type.id)}
                                        onChange={() => handleCheckboxChange(type.id)}
                                        className="w-5 h-5 border border-gray-300 rounded appearance-none hover:border-blue-600 checked:border-blue-600 transition-colors duration-200 flex-shrink-0 mt-0.5 relative checked:bg-blue-600"
                                    />
                                    <svg
                                        className={`absolute inset-0 mt-0.5 pointer-events-none ${
                                            selectedTypes.includes(type.id) ? 'opacity-100' : 'opacity-0'
                                        }`}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2"
                                    >
                                        <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                </div>
                                <span className="text-gray-900">{type.name}</span>
                            </div>
                            <span className="text-gray-500">({type.count})</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PropertyTypesFilterComponent;