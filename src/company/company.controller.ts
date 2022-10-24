import { Controller, Get } from '@nestjs/common';
import { CompanyModel } from 'src/models/company.interface';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}
  @Get()
  getCompany(): CompanyModel {
    return this.companyService.getCompany();
  }
}
