import axios from 'axios';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { getHolidays, addHoliday, getWorkingHours } from './request-helper';

async function main() {
    try {
        await addHoliday('2023-01-01');
        const holidays = await getHolidays();
        const hoursInApril = await getWorkingHours('2023-04');
        const hoursInMay = await getWorkingHours('2023-05');
        
        const results = {
            holidays,
            hoursInApril,
            hoursInMay,
        };

        const yamlStr = yaml.dump(results);
        fs.writeFileSync('results.yaml', yamlStr, 'utf8');
    } catch (error) {
        console.error(error);
    }
}

main();