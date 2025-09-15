import { IsNotEmpty, IsString } from 'class-validator';

export class AddCustomerDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
