import { QueryInterface } from "sequelize";
import { v4 as uuidv4 } from "uuid";

export default {
  async up(queryInterface: QueryInterface) {
    const categories = await queryInterface.sequelize.query(
      `SELECT id, name FROM categories;`
    );

    const categoryMap: { [key: string]: string } = {};
    categories[0].forEach((category: any) => {
      categoryMap[category.name] = category.id;
    });

    let products = [
      {
        id: uuidv4(),
        name: "Professional Laptop",
        price: 10000000,
        categoryId: categoryMap["Electronics"],
        image:
          "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400",
        stock: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "Wireless Earbuds",
        price: 500000,
        categoryId: categoryMap["Audio"],
        image:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&h=400",
        stock: 42,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "Smart Watch",
        price: 450000,
        categoryId: categoryMap["Wearables"],
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400",
        stock: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "4K Monitor",
        price: 4000000,
        categoryId: categoryMap["Electronics"],
        image:
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&h=400",
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "Wireless Keyboard",
        price: 300000,
        categoryId: categoryMap["Accessories"],
        image:
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&h=400",
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "Portable SSD",
        price: 1500000,
        categoryId: categoryMap["Storage"],
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400",
        stock: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("products", products, {});
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete("products", {});
  },
};

