import { Injectable, NotFoundException } from '@nestjs/common';
import { IPedido } from 'modules/database/interfaces/pedido';
import { Pedido } from 'modules/database/models/pedido';

import { PedidoRepository } from '../repositories/pedido';

@Injectable()
export class PedidosService {
  constructor(private pedidoRepository: PedidoRepository) {}
  public async save(model: IPedido): Promise<Pedido> {
    if (model.id) return this.update(model);
    return this.create(model);
  }

  public async remove(Id: number): Promise<void> {
    const pedido = await this.pedidoRepository.findById(Id);
    if (!pedido) {
      throw new NotFoundException('not-found');
    }
    return this.pedidoRepository.remove(Id);
  }
  private async create(model: IPedido): Promise<Pedido> {
    return this.pedidoRepository.insert(model);
  }
  private async update(model: IPedido): Promise<Pedido> {
    const pedido = await this.pedidoRepository.findById(model.id);
    if (!pedido) throw new NotFoundException('not-found');
    return this.pedidoRepository.update({ ...pedido, ...model });
  }
}
