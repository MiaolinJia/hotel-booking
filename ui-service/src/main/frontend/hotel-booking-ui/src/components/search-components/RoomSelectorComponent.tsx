import React, {useState, useRef, useEffect} from 'react';
import {User, Minus, Plus, BedDouble, ChevronDown} from 'lucide-react';
import './styles/RoomSelector.css';
import {ChildAge} from "../../types/HotelSearchFormTypes.ts";

interface SearchHotelComponentProps {
    rooms: number;
    adults: number;
    children: number;
    childrenAges?: ChildAge[];
    onRoomDataChange: (key: 'rooms' | 'adults' | 'children', value: number, childrenAges?: ChildAge[]) => void;
}

const SearchHotelComponent: React.FC<SearchHotelComponentProps> = ({
                                                                       rooms,
                                                                       adults,
                                                                       children,
                                                                       childrenAges = [],
                                                                       onRoomDataChange,
                                                                   }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const [childAgesState, setChildAgesState] = useState<ChildAge[]>(() =>
        Array.from({length: children}, (_, index) => {
            const existingChild = childrenAges.find(child => child.id === index);
            return existingChild || {id: index, age: null};
        })
    );

    useEffect(() => {
        const newLength = children;
        const currentLength = childAgesState.length;

        if (newLength !== currentLength) {
            if (newLength > currentLength) {
                const newAges = [...childAgesState];
                for (let i = currentLength; i < newLength; i++) {
                    newAges.push({id: i, age: null});
                }
                setChildAgesState(newAges);
                onRoomDataChange('children', newLength, newAges);
            } else {
                const newAges = childAgesState.slice(0, newLength);
                setChildAgesState(newAges);
                onRoomDataChange('children', newLength, newAges);
            }
        }
    }, [children]);

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

    const handleChange = (key: 'rooms' | 'adults' | 'children', increment: boolean) => {
        const currentValue = key === 'rooms' ? rooms : key === 'adults' ? adults : children;
        const newValue = increment ? currentValue + 1 : currentValue - 1;

        if (key === 'children') {
            const updatedAges = increment
                ? [...childAgesState, {id: childAgesState.length, age: null}]
                : childAgesState.slice(0, -1);
            onRoomDataChange(key, newValue, updatedAges);
        } else {
            onRoomDataChange(key, newValue);
        }
    };

    const handleAgeChange = (childIndex: number, newAge: string) => {
        const updatedAges = childAgesState.map((child, index) => {
            if (index === childIndex) {
                return {...child, age: newAge === '' ? null : parseInt(newAge)};
            }
            return child;
        });
        setChildAgesState(updatedAges);
        onRoomDataChange('children', children, updatedAges);
    };

    const getAgeText = (age: number) => {
        if (age === 0) return 'Infant';
        return `${age} ${age === 1 ? 'yr' : 'yrs'}`;
    };

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
                        (key === 'rooms' && rooms >= 9) ||
                        (key === 'adults' && adults >= 5) ||
                        (key === 'children' && children >= 5)
                    }
                >
                    <Plus size={16}/>
                </button>
            </div>
        </div>
    );

    const renderGroupBookingNotice = () => {
        if (rooms >= 9) {
            return (
                <div className="group-notice">
                    <div className="group-notice-content">
                        <BedDouble className="notice-icon"/>
                        <div className="notice-text">
                            <p>
                                Need more rooms? Special group rates available with our hotel partner, hotelplanner.com
                            </p>
                            <a href="#" className="notice-link">
                                10 Rooms or More
                                <ChevronDown className="notice-arrow"/>
                            </a>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    };

    const renderAddChildren = () => {
        if (children === 0) return null;

        return childAgesState.map((child, index) => (
            <div key={`child-${child.id}`} className="child-age-selector">
                <span className="child-age-label">Age of Child {index + 1}</span>
                <div className="child-age-dropdown">
                    <select
                        className="age-select"
                        value={child.age === null ? '' : child.age.toString()}
                        onChange={(e) => handleAgeChange(index, e.target.value)}
                    >
                        <option value="">Age Needed</option>
                        {Array.from({length: 18}, (_, i) => (
                            <option key={i} value={i}>{getAgeText(i)}</option>
                        ))}
                    </select>
                    <ChevronDown className="dropdown-icon"/>
                </div>
            </div>
        ));
    };

    const showError = children > 0 && childAgesState.some(child => child.age === null);

    return (
        <div className="hotel-search" ref={dropdownRef}>
            <button
                type="button"
                className="hotel-search-button"
                onClick={() => setIsOpen(prev => !prev)}
            >
                <User size={20}/>
                <span className="room-info">
                    {`${adults} Adult${adults > 1 ? 's' : ''}${
                        children >= 1 ? `, ${children} ${children > 1 ? 'Children' : 'Child'}` : ''
                    }, ${rooms} Room${rooms > 1 ? 's' : ''}`}
                </span>
            </button>

            {isOpen && (
                <div className="hotel-search-dropdown">
                    {renderCounter('Rooms', 'rooms')}
                    {renderGroupBookingNotice()}
                    {renderCounter('Adults', 'adults')}
                    {renderCounter('Children', 'children')}
                    {renderAddChildren()}
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
            {!isOpen && showError && (
                <div className="age-error-message">
                    Please enter children's age to get the best price for your group
                </div>
            )}
        </div>
    );
};

export default SearchHotelComponent;