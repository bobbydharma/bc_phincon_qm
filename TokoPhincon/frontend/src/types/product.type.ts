/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ProductType {
    id: string;
    image: string;
    name: string;
    stock: number;
    price: number;
    categoryId: string;
    category: string
    createdAt: Date;
    updatedAt: Date;
  }

  export interface ProductStateType {
    products: ProductType[];
    product: ProductType | null;
    loading: boolean;
    error: any;
    message: string | null;
    status: string | null;
}

export type ProductFormType = Omit<ProductType, "id">;