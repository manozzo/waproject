import { ApiProperty } from '@nestjs/swagger';
import { Model } from 'objection';

import { IPedido } from '../interfaces/pedido';

export class Pedido extends Model implements IPedido {
  @ApiProperty({ type: 'integer' })
  public id: number;
  @ApiProperty({ type: 'string' })
  public descricao: string;
  @ApiProperty({ type: 'number' })
  public quantidade: number;
  @ApiProperty({ type: 'number' })
  public valor: number;
  @ApiProperty({ type: 'string', format: 'date-time' })
  public createdDate: Date;
  @ApiProperty({ type: 'string', format: 'date-time' })
  public updatedDate: Date;

  public static get tableName(): string {
    return 'Pedidos';
  }

  public $beforeInsert(): void {
    this.createdDate = this.updatedDate = new Date();
  }

  public $beforeUpdate(): void {
    this.updatedDate = new Date();
  }
}
