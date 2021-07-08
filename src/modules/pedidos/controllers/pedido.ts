import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthRequired } from 'modules/common/guards/token';
import { enRoles } from 'modules/database/interfaces/user';
import { Pedido } from 'modules/database/models/pedido';

import { PedidoRepository } from '../repositories/pedido';
import { PedidosService } from '../services/pedidos';
import { ListValidator } from '../validators/list';
import { SaveValidator } from '../validators/save';

@ApiTags('Admin: User')
@Controller('/pedidos')
@AuthRequired([enRoles.admin])
export class PedidosController {
  constructor(private pedidoRepository: PedidoRepository, private pedidoService: PedidosService) {}

  @Get()
  @ApiResponse({ status: 200, type: [Pedido] })
  public async list(@Query() model: ListValidator) {
    return this.pedidoRepository.list(model);
  }

  @Post()
  @ApiResponse({ status: 200, type: Pedido })
  public async save(@Body() model: SaveValidator) {
    return this.pedidoService.save(model);
  }
}
