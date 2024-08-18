import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class HolidayService {
    private readonly db: Pool;

    constructor() {
        this.db = new Pool({
            user: 'calendar',
            host: '127.0.0.1',
            database: 'calendar',
            password: 'test24password',
            port: 5432,
        });
    }

    async listHolidays() {
        const res = await this.db.query('SELECT date FROM holidays');
        return res.rows;
    }

    async addHoliday(date: string) {
        await this.db.query('INSERT INTO holidays (date) VALUES ($1)', [date]);
        return { message: 'Holiday added' };
    }

    async deleteHoliday(date: string) {
        await this.db.query('DELETE FROM holidays WHERE date = $1', [date]);
        return { message: 'Holiday deleted' };
    }
}