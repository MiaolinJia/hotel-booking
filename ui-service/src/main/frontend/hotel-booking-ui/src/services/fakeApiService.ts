import { generateHotels } from '../utils/fakeHotelData';

export const fakeApiService = {
    getHotels: async () => {
        await new Promise(resolve => setTimeout(resolve, 500));

        return {
            data: generateHotels(15),
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {}
        };
    }
};