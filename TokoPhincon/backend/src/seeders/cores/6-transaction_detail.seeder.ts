import { QueryInterface } from "sequelize";
import { v4 as uuidv4 } from "uuid";

export default {
  async up(queryInterface: QueryInterface) {
    const [transactionResults] = (await queryInterface.sequelize.query(
      `SELECT id FROM transactions;`
    )) as [Array<{ id: string }>, unknown];

    const [productResults] = (await queryInterface.sequelize.query(
      `SELECT id, name, price FROM products;`
    )) as [Array<{ id: string; name: string; price: number }>, unknown];

    const transactionDetails = [
      {
        id: uuidv4(),
        transactionId: transactionResults[0].id,
        products: JSON.stringify([
          {
            id: productResults[0].id,
            name: productResults[0].name,
            price: productResults[0].price,
            qty: 2,
          },
          {
            id: productResults[1].id,
            name: productResults[1].name,
            price: productResults[1].price,
            qty: 1,
          },
        ]),
      },
      {
        id: uuidv4(),
        transactionId: transactionResults[1].id,
        products: JSON.stringify([
          {
            id: productResults[0].id,
            name: productResults[0].name,
            price: productResults[0].price,
            qty: 5,
          },
        ]),
      },
    ];

    await queryInterface.bulkInsert(
      "transaction_details",
      transactionDetails,
      {}
    );
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete("transaction_details", {});
  },
};
