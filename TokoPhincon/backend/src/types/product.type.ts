export interface ProductModel {
    id: string;
    image: string;
    name: string;
    price: number;
    stock: number;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;	
}