import { Module } from '@nestjs/common';
import { WorkingWeekendController } from './working-weekend.controller';
import { WorkingWeekendService } from './working-weekend.service';

@Module({
    controllers: [WorkingWeekendController],
    providers: [WorkingWeekendService],
})
export class WorkingWeekendModule {}