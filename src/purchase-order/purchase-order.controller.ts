import { Body, Controller, Post } from '@nestjs/common';
import { PurchaseOrderService } from './purchase-order.service';
import { AddPurchaseOrderDto } from 'src/dtos';

@Controller('purchase-orders')
export class PurchaseOrderController {
  constructor(private readonly purchaseOrderService: PurchaseOrderService) {}

  @Post()
  async createPurchaseOrder(@Body() payload: AddPurchaseOrderDto) {
    return this.purchaseOrderService.createPurchaseOrder(payload);
  }
}
