import { Controller, Get, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { GetProductsDto } from 'src/dtos/product/get-products.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts(@Query() payload: GetProductsDto) {
    return this.productService.getProducts(payload);
  }
}
