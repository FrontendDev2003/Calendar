import { Controller, Get, Query } from '@nestjs/common';
import { WorkingHourService } from './working-hour.service';

@Controller('working-hour')
export class WorkingHourController {
  constructor(private readonly workingHourService: WorkingHourService) {}

  @Get('get')
  async getWorkingHours(@Query('month') month: string, @Query('year') year: string): Promise<any> {
    // Код метода
  }
}