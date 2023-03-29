import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export default class accountDto {
  @IsString()
  @IsNotEmpty()
  accountNumber: string;

  @IsInt()
  @IsNotEmpty()
  balance: number;
}
