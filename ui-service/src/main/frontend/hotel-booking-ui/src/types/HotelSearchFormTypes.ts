export interface DestinationAndDate {
    destination: string;
    startDate: Date | undefined;
    endDate: Date | undefined;
}

export interface FormData {
    hotelType: "single" | "multi";
    destinationAndDates: DestinationAndDate[];
    rooms: number;
    adults: number;
    children: number;
    bundleSave: boolean;
    addCar: boolean;
    addFlight: boolean;
}

export interface HotelSearchFormSectionProps {
    className: string;
    formData: FormData;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleDateChange: (
        index: number,
        dates: [Date | null, Date | null]
    ) => void;
    handleRoomDataChange: (
        key: "rooms" | "adults" | "children",
        value: number
    ) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    isDateSelectable: (date: Date) => boolean;
    handleAddHotel: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleRemoveHotel: (
        index: number,
        event: React.MouseEvent<HTMLButtonElement>
    ) => void;
}
