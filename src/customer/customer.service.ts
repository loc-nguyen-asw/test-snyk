import { BadRequestException, Injectable } from '@nestjs/common';
import { Customer } from 'src/databases/entities';
import { AddCustomerDto } from 'src/dtos';

@Injectable()
export class CustomerService {
  async getCustomers() {
    return await Customer.find();
  }

  async createCustomer(payload: AddCustomerDto) {
    const existingCustomer = await Customer.findOne({
      where: { name: payload.name },
    });
    if (existingCustomer)
      throw new BadRequestException('', 'Tên khách hàng đã tồn tại.');

    await Customer.create({ ...payload }).save();
    return { message: 'Tạo khách hàng thành công.' };
  }
}
