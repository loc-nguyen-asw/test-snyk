import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductStatusEnum } from './enums';
import { OrderItem } from './order-item.entity';
import { PurchaseOrderItem } from './purchase-order-item.entity';

@Entity({ name: 'product' })
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  unit: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  unitPrice: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({
    type: 'enum',
    enum: ProductStatusEnum,
    default: ProductStatusEnum.AVAILABLE,
  })
  status: ProductStatusEnum;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.product)
  orderItems: OrderItem[];

  @OneToMany(
    () => PurchaseOrderItem,
    (purchaseOrderItem) => purchaseOrderItem.product,
  )
  purchaseOrderItems: PurchaseOrderItem[];
}
