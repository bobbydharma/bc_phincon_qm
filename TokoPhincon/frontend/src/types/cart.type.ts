/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CartType {
    id: string;
    userId: string;
    productId: string;
    qty: number;
    totalPrice: number;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface CartStateType {
    carts: CartType[];
    cart: CartType | null;
    loading: boolean;
    error: any;
    message: string | null;
    status: string | null;
}

export type CartFormType = Omit<CartType, "createdAt" | "updatedAt" | "id" | "userId">;
