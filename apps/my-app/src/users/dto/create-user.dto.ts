import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, ValidateNested } from 'class-validator';
export class AddressDto {
  @IsNotEmpty()
  address1: string;
  @IsNotEmpty()
  address2: string;
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  state: string;
  @IsNotEmpty()
  zip: string;
}
export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;
}
