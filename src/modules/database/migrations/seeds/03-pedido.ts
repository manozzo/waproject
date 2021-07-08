import * as faker from 'faker/locale/pt_BR';
import * as Knex from 'knex';
import { IPedido } from 'modules/database/interfaces/pedido';
import { IS_DEV } from 'settings';

export async function seed(knex: Knex): Promise<any> {
  if (!IS_DEV) return;
  for (let i = 0; i < 30; i++) {
    const pedido: IPedido = {
      descricao: faker.lorem.words(10),
      valor: faker.random.number({ min: 100, max: 200 }),
      quantidade: faker.random.number({ min: 20, max: 50 }),
      createdDate: new Date(),
      updatedDate: new Date()
    };

    await knex.insert(pedido).into('Pedidos');
  }
}
