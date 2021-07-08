import { HttpModule, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CommonModule } from 'modules/common/module';
import { DatabaseModule } from 'modules/database/module';

import { PedidosController } from './controllers/pedido';
import { RenewTokenMiddleware } from './middlewares/renewToken';
import { PedidoRepository } from './repositories/pedido';
import { PedidosService } from './services/pedidos';

@Module({
  imports: [HttpModule, CommonModule, DatabaseModule],
  controllers: [PedidosController],
  providers: [PedidoRepository, PedidosService]
})
export class PedidoModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(RenewTokenMiddleware).forRoutes('*');
  }
}
