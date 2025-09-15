import { Controller, Get, Post, Body } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { AddCustomerDto } from 'src/dtos';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  async getCustomers() {
    return this.customerService.getCustomers();
  }

  @Post()
  async createCustomer(@Body() payload: AddCustomerDto) {
    return this.customerService.createCustomer(payload);
  }
}
