import { BadRequestException, Injectable } from '@nestjs/common';
import { Provider } from 'src/databases/entities';
import { AddProviderDto } from 'src/dtos';

@Injectable()
export class ProviderService {
  async addProvider(payload: AddProviderDto) {
    const existingProvider = await Provider.findOne({
      where: { name: payload.name },
    });
    if (existingProvider)
      throw new BadRequestException('', 'Tên nhà cung cấp đã tồn tại');

    await Provider.create({ ...payload }).save();
    return { message: 'Tạo nhà cung cấp thành công.' };
  }

  async getProviders() {
    return await Provider.find();
  }
}
