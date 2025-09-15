import { Injectable } from '@nestjs/common';
import {
  Product,
  PurchaseOrder,
  PurchaseOrderItem,
} from 'src/databases/entities';
import { AddPurchaseOrderDto } from 'src/dtos';

@Injectable()
export class PurchaseOrderService {
  async createPurchaseOrder(payload: AddPurchaseOrderDto) {
    const purchaseOrder = await PurchaseOrder.create({
      providerId: payload.providerId,
      date: payload.date,
      shippingFee: payload.shippingFee,
    }).save();

    for (const item of payload.purchaseOrderItems) {
      let product: Product;
      if (item.id) {
        product = await Product.findOne({
          where: { id: item.id, code: item.code },
        });

        await Product.update(product.id, {
          unit: item.unit,
          name: item.name,
          unitPrice: item.unitPrice,
          quantity: product.quantity + item.amount,
        });
      } else {
        product = await Product.create({
          code: item.code,
          name: item.name,
          unit: item.unit,
          unitPrice: item.unitPrice,
          quantity: item.amount,
        }).save();
      }

      await PurchaseOrderItem.create({
        purchaseOrderId: purchaseOrder.id,
        productId: product.id,
        amount: item.amount,
        unitCost: item.unitCost,
        quantity: item.amount,
      }).save();
    }

    return { message: 'Tạo đơn hàng nhập thành công.' };
  }
}
