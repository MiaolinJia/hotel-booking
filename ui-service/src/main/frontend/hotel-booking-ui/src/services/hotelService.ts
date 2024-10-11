import axios from "axios";


export const hotelService = {
    getHotels: async () => {
        try {
            const response = await axios.get('http://localhost:3004/hotels');
            return {
                data: response.data,
                status: response.status,
                statusText: response.statusText,
                headers: response.headers,
                config: response.config
            };
        } catch (error) {
            console.error('Error fetching hotels:', error);
            throw error;
        }
    }
};