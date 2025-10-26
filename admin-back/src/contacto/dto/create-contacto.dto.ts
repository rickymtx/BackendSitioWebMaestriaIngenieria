import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateContactoDto {
  @IsOptional()
  @IsString()
  readonly nombre?: string;

  @IsOptional()
  @IsString()
  readonly puesto?: string;

  @IsOptional()
  @IsEmail()
  readonly correo?: string;

  @IsOptional()
  @IsString()
  readonly telefono?: string;
}
