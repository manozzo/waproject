import { Test } from '@nestjs/testing';

import { PedidosService } from './pedidos';

// import { PedidosController } from '../controllers/pedido';
describe('PedidosController', () => {
  let service: PedidosService;
  // let controller: PedidosController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      // controllers: [PedidosController],
      providers: [
        {
          provide: PedidosService,
          useValue: {
            list: jest.fn(),
            save: jest.fn()
          }
        }
      ]
    }).compile();

    service = await module.get<PedidosService>(PedidosService);
    // controller = module.get<PedidosController>(PedidosController);
  });

  // describe('findAll', () => {
  //   it('should be returned', async () => {
  //     const result = ['test'];
  //     jest.spyOn(service, 'findAll').mockImplementation(() => result);

  //     expect(await controller.findAll()).toBe(result);
  //   });
  // });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
