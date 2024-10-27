import React, {useState, useRef, useEffect} from 'react';
import {User, Minus, Plus} from 'lucide-react';
import './styles/RoomSelector.css';

interface SearchHotelComponentProps {
    rooms: number;
    adults: number;
    children: number;
    onRoomDataChange: (key: 'rooms' | 'adults' | 'children', value: number) => void;
}

const SearchHotelComponent: React.FC<SearchHotelComponentProps> = ({rooms, adults, children, onRoomDataChange}) => {

    // selector section
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    // Close dropdown when clicking outside the component
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Handle increment/decrement for rooms, adults, and children
    const handleChange = (key: 'rooms' | 'adults' | 'children', increment: boolean) => {
        const currentValue = key === 'rooms' ? rooms : key === 'adults' ? adults : children;
        const newValue = increment ? currentValue + 1 : currentValue - 1;
        onRoomDataChange(key, newValue);
    };

    // Render counter controls for rooms, adults, and children
    const renderCounter = (label: string, key: 'rooms' | 'adults' | 'children') => (
        <div className="hotel-search-counter">
            <span className="hotel-search-label">{label}</span>
            <div className="hotel-search-controls">
                <button
                    type="button"
                    onClick={() => handleChange(key, false)}
                    className="hotel-search-control-button"
                    disabled={
                        (key === 'rooms' && rooms <= 1) ||
                        (key === 'adults' && adults <= 1) ||
                        (key === 'children' && children <= 0)
                    }
                >
                    <Minus size={16}/>
                </button>
                <span>{key === 'rooms' ? rooms : key === 'adults' ? adults : children}</span>
                <button
                    type="button"
                    onClick={() => handleChange(key, true)}
                    className="hotel-search-control-button"
                    disabled={
                        (key === 'rooms' && rooms === 9) ||
                        (key === 'adults' && adults === 5) ||
                        (key === 'children' && children === 5)
                    }
                >
                    <Plus size={16}/>
                </button>
            </div>
        </div>
    );

    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <div className="hotel-search" ref={dropdownRef}>
            <button
                type="button"
                className="hotel-search-button"
                onClick={toggleDropdown}
            >
                <User size={20}/>
                <span>{`${adults} Adult${adults > 1 ? 's' : ''}, 
                ${children >= 1 ? `, ${children} ${children > 1 ? 'Children' : 'Child'}` : ''}, 
                ${rooms} Room${rooms > 1 ? 's' : ''}`}</span>
            </button>

            {/* Dropdown for selecting rooms, adults, and children */}
            {isOpen && (
                <div className="hotel-search-dropdown">
                    {renderCounter('Rooms', 'rooms')}
                    {renderCounter('Adults', 'adults')}
                    {renderCounter('Children', 'children')}

                    <p className="hotel-search-info">
                        Add your child's age at check-in for the best deals and assistance. Each hotel has unique
                        policies.
                    </p>


                    <button
                        type="button"
                        className="hotel-search-done-button"
                        onClick={() => setIsOpen(false)}
                    >
                        Done
                    </button>
                </div>
            )}
        </div>
    );
};

export default SearchHotelComponent;
