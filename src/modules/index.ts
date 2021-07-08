import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';

import { AdminModule } from './admin/module';
import { AppModule } from './app/module';
import { PedidoModule } from './pedidos/pedidos';

@Module({
  imports: [
    RouterModule.forRoutes([
      { path: '/admin', module: AdminModule },
      { path: '/app', module: AppModule },
      { path: '/admin/pedidos', module: PedidoModule }
    ]),
    AdminModule,
    AppModule,
    PedidoModule
  ]
})
export class ApplicationModule {}
