import { Body, Controller, Post, Get } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { AddProviderDto } from 'src/dtos';

@Controller('providers')
export class ProviderController {
  constructor(private readonly providerService: ProviderService) {}

  @Get()
  async getProviders() {
    return this.providerService.getProviders();
  }

  @Post()
  async addProvider(@Body() payload: AddProviderDto) {
    await this.providerService.addProvider(payload);
  }
}
