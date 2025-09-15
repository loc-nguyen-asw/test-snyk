import { Injectable } from '@nestjs/common';
import { Product } from 'src/databases/entities';
import { GetProductsDto } from 'src/dtos/product/get-products.dto';
import { ILike } from 'typeorm';

@Injectable()
export class ProductService {
  async getProducts(payload: GetProductsDto) {
    const products = await Product.find({
      where: [
        { name: ILike(`%${payload.searchText ?? ''}%`) },
        { code: ILike(`%${payload.searchText ?? ''}%`) },
      ],
      order: { name: 'ASC' },
      relations: {
        purchaseOrderItems: true,
      },
    });

    return products.map((product) => ({
      ...product,
      purchaseOrderItems: product.purchaseOrderItems.filter(
        (item) => item.quantity > 0,
      ),
    }));
  }
}
