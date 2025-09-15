import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Provider } from './provider.entity';
import { PurchaseOrderItem } from './purchase-order-item.entity';

@Entity({ name: 'purchase-orders' })
export class PurchaseOrder extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  providerId: number;

  @Column()
  date: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  shippingFee: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Provider)
  @JoinColumn({ name: 'providerId', referencedColumnName: 'id' })
  provider: Provider;

  @OneToMany(
    () => PurchaseOrderItem,
    (purchaseOrderItem) => purchaseOrderItem.purchaseOrder,
  )
  purchaseOrderItems: PurchaseOrderItem[];
}
