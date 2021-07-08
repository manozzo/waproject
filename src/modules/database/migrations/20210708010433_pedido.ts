import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('Pedidos', table => {
    table.increments('id').primary();
    table.string('descricao', 300).notNullable();
    table.decimal('valor', 9, 2).notNullable();
    table.integer('quantidade').notNullable();
    table.dateTime('createdDate').nullable();
    table.dateTime('updatedDate').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('Pedidos');
}
