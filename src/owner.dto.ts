import { IsNotEmpty, IsBoolean, IsString } from 'class-validator';

export default class ownerDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsBoolean()
  @IsNotEmpty()
  business: boolean;
}
