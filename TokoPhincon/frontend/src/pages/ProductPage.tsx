/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCards.tsx";
import { Grid2X2, LayoutList } from "lucide-react";
import { cn } from "../libs/utils";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/Product.slice.ts";
import { ProductType } from "../types/product.type.ts";

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const dispatch = useDispatch();
  const { products } = useSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(getAllProducts() as any);
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">All Products</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode("grid")}
            className={cn(
              "p-2 rounded-md transition-colors",
              viewMode === "grid"
                ? "bg-blue-100 text-blue-700"
                : "text-gray-500 hover:bg-gray-100"
            )}
            aria-label="Grid view"
          >
            <Grid2X2 size={20} />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={cn(
              "p-2 rounded-md transition-colors",
              viewMode === "list"
                ? "bg-blue-100 text-blue-700"
                : "text-gray-500 hover:bg-gray-100"
            )}
            aria-label="List view"
          >
            <LayoutList size={20} />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "grid gap-6",
          viewMode === "grid"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
        )}
      >
        {products.map((product: ProductType) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
