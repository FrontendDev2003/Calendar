import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { HolidayService } from './holiday.service';

@Controller('holiday') // Декоратор класса для определения маршрута 'holiday'
export class HolidayController {
  constructor(private readonly holidayService: HolidayService) {}

  @Get('list') // Декоратор метода для GET-запроса на маршрут 'holiday/list'
  async getHolidays(): Promise<any> {
    // Логика получения списка праздников
    return this.holidayService.getHolidays();
  }

  @Post('add') // Декоратор метода для POST-запроса на маршрут 'holiday/add'
  async addHoliday(@Body() body: any): Promise<{ message: string }> {
    // Логика добавления праздника
    await this.holidayService.addHoliday(body);
    return { message: 'Holiday added successfully' };
  }

  @Delete('delete') // Декоратор метода для DELETE-запроса на маршрут 'holiday/delete'
  async deleteHoliday(@Body() body: any): Promise<{ message: string }> {
    // Логика удаления праздника
    await this.holidayService.deleteHoliday(body.id);
    return { message: 'Holiday deleted successfully' };
  }
}