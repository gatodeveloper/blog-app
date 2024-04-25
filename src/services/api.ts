import axios, {AxiosError } from 'axios';

export const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE}/api/v1/`,
    headers: {
        "Content-Type": "application/json",
      }    
});

export const handleAxiosError = (error: AxiosError) => {
    if (error.response) {      
        console.error('Error response from server:', error.response.data);
        console.error('Status code:', error.response.status);
    } else if (error.request) {      
        console.error('No response received:', error.request);
    } else {      
        console.error('Error setting up the request:', error.message);
    }
    console.error('Error config:', error.config);
};