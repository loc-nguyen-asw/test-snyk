import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { AddPurchaseOrderItemDto } from '../purchase-order-item/add-purchase-order-item.dto';

export class AddPurchaseOrderDto {
  @IsString()
  @IsNotEmpty()
  date: string;

  @IsNumber()
  @IsNotEmpty()
  shippingFee: number;

  @IsNumber()
  @IsNotEmpty()
  providerId: number;

  @IsArray()
  @IsNotEmpty({ each: true })
  purchaseOrderItems: AddPurchaseOrderItemDto[];
}
