import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsOptional, IsString } from 'class-validator';
import { PaginationValidator } from 'modules/common/validators/pagination';

export class ListValidator extends PaginationValidator {
  @IsString()
  @IsOptional()
  @IsIn(['id', 'descricao', 'valor', 'quantidade', 'createdDate', 'updatedDate'])
  @ApiProperty({ required: false, enum: ['id', 'descricao', 'valor', 'quantidade', 'createdDate', 'updatedDate'] })
  public orderBy: string;
}
