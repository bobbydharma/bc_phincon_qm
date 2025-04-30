/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ProductType {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    stock: number;
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