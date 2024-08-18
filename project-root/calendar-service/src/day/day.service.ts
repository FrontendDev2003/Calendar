import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DayService {
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

    async checkDay(date: string) {
        const res = await this.db.query('SELECT type FROM days WHERE date = $1', [date]);
        return res.rows[0];
    }
}