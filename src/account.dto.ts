import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class accountDto {
  @IsString()
  @IsNotEmpty()
  accountNumber: string;

  @IsNumber()
  @IsNotEmpty()
  balance: number;
}
