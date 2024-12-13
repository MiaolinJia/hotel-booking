export interface FormData {
  hotelType: "SINGLE" | "MULTI";
  destinationAndDates: DestinationAndDate[];
  occupancy: OccupancyDetail;
  addCar: boolean;
  addFlight: boolean;
}

export interface DestinationAndDate {
  location: Location | undefined;
  checkInDate: Date | undefined;
  checkOutDate: Date | undefined;
}

export interface Location {
  city: string;
  state: string;
  country: string;
  id: string;
}

export interface OccupancyDetail {
  rooms: number;
  adults: number;
  children: number;
  childrenAges: ChildAge[];
}

export interface ChildAge {
  id: number;
  age: number | null;
}

export interface HotelSearchFormSectionProps {
  className: string;
  formData: FormData;
  handleDestinationChange: (index: number, event: Location) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateChange: (index: number, dates: [Date | null, Date | null]) => void;
  handleRoomDataChange: (
    key: "rooms" | "adults" | "children",
    value: number,
    childrenAges?: ChildAge[]
  ) => void;
  handleChildAgeChange: (childId: number, age: number | null) => void;
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
