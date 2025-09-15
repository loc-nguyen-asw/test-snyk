import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PurchaseOrder } from './purchase-order.entity';

@Entity({ name: 'providers' })
export class Provider extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @OneToMany(() => PurchaseOrder, (purchaseOrder) => purchaseOrder.provider)
  purchaseOrders: PurchaseOrder[];
}
