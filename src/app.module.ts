import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './databases/database.module';
import { ProviderModule } from './provider/provider.module';
import { PurchaseOrderModule } from './purchase-order/purchase-order.module';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    ProviderModule,
    PurchaseOrderModule,
    ProductModule,
    CustomerModule,
  ],
})
export class AppModule {}
