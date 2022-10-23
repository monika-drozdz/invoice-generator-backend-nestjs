import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CompanyModel } from './company/company.interface';

@Controller('company')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCompany(): CompanyModel {
    return this.appService.getCompany();
  }
}
