import axios from 'axios';
import { config } from './config';

export async function getHolidays() {
    const response = await axios.get(`${config.baseUrl}/holiday/list`);
    return response.data;
}

export async function addHoliday(date: string) {
    const response = await axios.post(`${config.baseUrl}/holiday/add`, { date });
    return response.data;
}

export async function getWorkingHours(month: string) {
    const response = await axios.get(`${config.baseUrl}/working-hour/get`, {
        params: { month },
    });
    return response.data;
}