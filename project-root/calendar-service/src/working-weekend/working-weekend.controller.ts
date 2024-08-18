import { Controller, Get, Post, Delete, Body } from '@nestjs/common';
import { WorkingWeekendService } from './working-weekend.service';

@Controller('working-weekend')
export class WorkingWeekendController {
  constructor(private readonly workingWeekendService: WorkingWeekendService) {}

  @Get('list')
  async getWorkingWeekends(): Promise<any> {
    // Код метода
  }

  @Post('add')
  async addWorkingWeekend(@Body() body: any): Promise<{ message: string }> {
    // Код метода
  }

  @Delete('delete')
  async deleteWorkingWeekend(@Body() body: any): Promise<{ message: string }> {
    // Код метода
  }
}