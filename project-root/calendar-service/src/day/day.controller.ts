import { Controller, Get, Query } from '@nestjs/common';
import { DayService } from './day.service';

@Controller('day')
export class DayController {
  constructor(private readonly dayService: DayService) {}

  @Get('check')
  async checkDay(@Query('date') date: string): Promise<any> {
    // Код метода
  }
}