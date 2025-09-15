import { IsOptional, IsString } from 'class-validator';

export class GetProductsDto {
  @IsString()
  @IsOptional()
  searchText: string;
}
