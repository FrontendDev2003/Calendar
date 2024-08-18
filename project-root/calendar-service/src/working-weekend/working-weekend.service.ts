import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class WorkingWeekendService {
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

    async listWorkingWeekends() {
        const res = await this.db.query('SELECT date FROM working_weekends');
        return res.rows;
    }

    async addWorkingWeekend(date: string) {
        await this.db.query('INSERT INTO working_weekends (date) VALUES ($1)', [date]);
        return { message: 'Working weekend added' };
    }

    async deleteWorkingWeekend(date: string) {
        await this.db.query('DELETE FROM working_weekends WHERE date = $1', [date]);
        return { message: 'Working weekend deleted' };
    }
}