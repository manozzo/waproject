import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, Min, MinLength } from 'class-validator';
import { IPedido } from 'modules/database/interfaces/pedido';

export class SaveValidator implements IPedido {
  @IsOptional()
  @IsInt()
  @Min(0)
  @ApiProperty({ required: false, type: 'integer' })
  public id?: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(300)
  @ApiProperty({ required: true, type: 'string', minLength: 3, maxLength: 300 })
  public descricao: string;

  @IsNotEmpty()
  @ApiProperty({ required: true, type: 'number' })
  public valor: number;

  @IsNotEmpty()
  @ApiProperty({ required: true, type: 'number' })
  public quantidade: number;
}
