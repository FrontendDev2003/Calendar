import { Module } from '@nestjs/common';
import { HolidayModule } from './holiday/holiday.module';
import { WorkingWeekendModule } from './working-weekend/working-weekend.module';
import { WorkingHourModule } from './working-hour/working-hour.module';
import { DayModule } from './day/day.module';

@Module({
    imports: [HolidayModule, WorkingWeekendModule, WorkingHourModule, DayModule],
})
export class AppModule {}