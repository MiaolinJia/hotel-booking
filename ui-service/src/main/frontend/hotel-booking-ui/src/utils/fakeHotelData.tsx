import { faker } from '@faker-js/faker';

interface Address {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
}

interface Hotel {
    id: string;
    name: string;
    address: Address;
    description: string;
    rating: number;
    price: number;
    image: string;
    amenities: string[];
}

export function createRandomHotel(): Hotel {
    return {
        id: faker.string.uuid(),
        name: `${faker.company.name()} Hotel`,
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            country: faker.location.country(),
            zipCode: faker.location.zipCode()
        },
        description: faker.lorem.paragraph(),
        rating: Number(faker.number.float({ min: 1, max: 5 }).toFixed(1)),
        price: faker.number.int({ min: 50, max: 500 }),
        image: faker.image.url({ width: 300, height: 200 }),
        amenities: faker.helpers.arrayElements([
            'Free WiFi', 'Pool', 'Fitness Center', 'Spa', 'Restaurant',
            'Room Service', 'Bar', 'Parking', 'Pet Friendly', 'Business Center'
        ], { min: 3, max: 8 })
    };
}

export function generateHotels(numHotels: number = 10): Hotel[] {
    return Array.from({ length: numHotels }, createRandomHotel);
}