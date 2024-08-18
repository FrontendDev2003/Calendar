import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class WorkingHourService {
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

    async getWorkingHours(month: string, year: string) {
        const res = await this.db.query(
            'SELECT hours FROM working_hours WHERE month = $1 AND year = $2',
            [month, year],
        );
        return res.rows[0];
    }
}