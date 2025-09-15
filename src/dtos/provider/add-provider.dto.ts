import { IsNotEmpty, IsString } from 'class-validator';

export class AddProviderDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
