export interface DestinationAndDate {
    destination: string;
    startDate: Date | undefined;
    endDate: Date | undefined;
}

export interface ChildAge {
    id: number;
    age: number | null;
}

export interface FormData {
    hotelType: "single" | "multi";
    destinationAndDates: DestinationAndDate[];
    rooms: number;
    adults: number;
    children: number;
    childrenAges: ChildAge[];
    addCar: boolean;
    addFlight: boolean;
}

export interface HotelSearchFormSectionProps {
    className: string;
    formData: FormData;
    handleDestinationChange: (
        index: number,
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleDateChange: (
        index: number,
        dates: [Date | null, Date | null]
    ) => void;
    handleRoomDataChange: (
        key: "rooms" | "adults" | "children",
        value: number,
        childrenAges?: ChildAge[]
    ) => void;
    handleChildAgeChange: (
        childId: number,
        age: number | null
    ) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    isDateSelectable: (date: Date) => boolean;
    handleAddHotel: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleRemoveHotel: (
        index: number,
        event: React.MouseEvent<HTMLButtonElement>
    ) => void;
}

export interface ChildAge {
    id: number;
    age: number | null;
}