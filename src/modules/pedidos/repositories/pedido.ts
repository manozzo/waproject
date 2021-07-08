import { Injectable } from '@nestjs/common';
import { IPaginationParams } from 'modules/common/interfaces/pagination';
import { IPedido } from 'modules/database/interfaces/pedido';
import { Pedido } from 'modules/database/models/pedido';
import { Page, Transaction } from 'objection';

@Injectable()
export class PedidoRepository {
  public async list(params: IPaginationParams, transaction?: Transaction): Promise<Page<Pedido>> {
    let query = Pedido.query(transaction)
      .select('*')
      .page(params.page, params.pageSize);

    if (params.orderBy) {
      query = query.orderBy(params.orderBy, params.orderDirection);
    }

    if (params.term) {
      query = query.where(query => {
        return query.where('descricao', 'ilike', `%${params.term}%`);
      });
    }

    return query;
  }

  public async count(transaction?: Transaction): Promise<Number> {
    const result: any = await Pedido.query(transaction)
      .count('id as count')
      .first();

    return Number(result.count);
  }

  public async findById(id: number, transaction?: Transaction): Promise<Pedido> {
    return Pedido.query(transaction)
      .where({ id })
      .first();
  }

  public async findByDescricao(descricao: string, transaction?: Transaction): Promise<Pedido> {
    return Pedido.query(transaction)
      .where({ descricao })
      .first();
  }

  public async insert(model: IPedido, transaction?: Transaction): Promise<Pedido> {
    return Pedido.query(transaction).insert(model);
  }

  public async update(model: IPedido, transaction?: Transaction): Promise<Pedido> {
    return Pedido.query(transaction).updateAndFetchById(model.id, <Pedido>model);
  }

  public async remove(id: number, transaction?: Transaction): Promise<void> {
    await Pedido.query(transaction)
      .del()
      .where({ id });
  }
}
