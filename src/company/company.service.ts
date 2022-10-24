import { Injectable } from '@nestjs/common';
import { CompanyModel } from 'src/models/company.interface';

@Injectable()
export class CompanyService {
  private company: CompanyModel = {
    name: 'KLG test task',
    address: 'Poland',
    phones: ['123 456 789', '789-456-123'],
  };

  getCompany(): CompanyModel {
    return this.company;
  }
}
