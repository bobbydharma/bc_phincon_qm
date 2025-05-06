/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import type { ProductType } from "../types/product.type";
import { ArrowLeft, Edit, X, Trash2 } from "lucide-react";
import {
  getAllProducts,
  updateProduct,
  deleteProduct,
} from "../features/products/Product.slice.ts";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "../hooks/use-toast.tsx";
import { createCart } from "../features/cart/Cart.slice.ts";
import { CartFormType } from "../types/cart.type.ts";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<ProductType | null>(null);
  const dispatch = useDispatch();
  const { products, loading }: { products: ProductType[]; loading: boolean } =
    useSelector((state: any) => state.products);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isUpdating, setIsUpdating] = useState(false);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      const existing = products.find((p) => p.id === id);
      if (existing) {
        setProduct(existing);
        return;
      }
      try {
        dispatch(getAllProducts() as any);
        const updated = products.find((p) => p.id === id);
        setProduct(updated || null);
      } catch (error) {
        console.error("Fetch via slice error:", error);
        setProduct(null);
      }
    };
    fetchProduct();
  }, [id, dispatch, products]);

  const handleEditClick = () => {
    setFormData(product);
    setIsEditing(true);
  };

  const handleDeleteClick = async () => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await dispatch(deleteProduct(id ?? "") as any);
        console.log("Product deleted successfully");
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!formData) return;
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "number" ? +e.target.value : e.target.value,
    });
  };

  const handleSave = async () => {
    if (!formData) return;
    setProduct(formData);
    setIsUpdating(true);

    try {
      await dispatch(updateProduct(formData) as any).unwrap();
      toast({
        title: "Success!",
        description: "Product has been saved successfully",
      });
    } catch (error) {
      console.log("error creating product", error);
      toast({
        title: "Error!",
        description: "Failed to edit product",
      });
    } finally {
      setIsUpdating(false); // selesai loading
      setIsEditing(false);
    }
  };

  const handleIncrease = () => {
    setQuantity((prev) => {
      if (product && prev < product.stock) {
        return prev + 1;
      }
      return prev;
    });
  }

  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = async () => {
    try {
      const cartData: CartFormType = {
        productId: product?.id ?? "",
        qty: quantity ?? 1,
        totalPrice: product?.price ?? 0
      };
      await dispatch(createCart(cartData) as any).unwrap();
      toast({
        title: "Success!",
        description: "Product has been saved successfully",
      });
    } catch (error) {
      console.log("error creating product", error);
      toast({
        title: "Error!",
        description: "Failed to edit product",
      });
    } finally {
      setIsUpdating(false); // selesai loading
      setIsEditing(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-pulse">Loading product details...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-4">
          Product Not Found
        </h2>
        <p className="mb-6">The product you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="text-blue-500 hover:underline flex items-center justify-center"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top Bar */}
      <div className="mb-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-blue-500 hover:underline flex items-center"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Products
        </Link>

        <div className="flex items-center space-x-4">
          {" "}
          {/* Membungkus tombol edit dan delete */}
          <button
            onClick={handleEditClick}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <Edit size={16} className="mr-2" />
            Edit Product
          </button>
          <button
            onClick={handleDeleteClick}
            className="flex items-center text-red-600 hover:text-red-800"
          >
            <Trash2 size={16} className="mr-2" />
            Delete Product
          </button>
        </div>
      </div>

      {/* Product Card */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="p-6 md:w-1/2">
            <div className="flex justify-between items-start">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {product.name}
              </h1>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {product.category}
              </span>
            </div>

            <div className="mb-6">
              <p className="text-3xl font-bold text-blue-600 mb-2">
                Rp.{product.price.toFixed(0)}
              </p>
              <p
                className={`text-sm font-medium ${
                  product.stock > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {product.stock > 0
                  ? `In Stock (${product.stock} available)`
                  : "Out of Stock"}
              </p>
            </div>

            {/* Quantity selector + Add to Cart */}
            {product.stock > 0 && (
              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium">Quantity:</span>
                  <div className="flex items-center border rounded-md px-2 py-1">
                    <button
                      onClick={handleDecrease}
                      className="px-2 text-lg font-bold text-gray-600 hover:text-black"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      readOnly
                      className="w-10 text-center border-none focus:outline-none"
                    />
                    <button
                      onClick={handleIncrease}
                      className="px-2 text-lg font-bold text-gray-600 hover:text-black"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 flex items-center justify-center"
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isEditing && formData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
            <button
              onClick={() => setIsEditing(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-bold mb-4">Edit Product</h3>

            <div className="space-y-4">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
                placeholder="Product Name"
              />
              <label
                htmlFor="price"
                className="text-sm font-medium text-gray-700"
              >
                Price (Rp.)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price || ""}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
                placeholder="Price"
              />
              <label
                htmlFor="category"
                className="text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
                placeholder="Category"
              />
              <label
                htmlFor="image"
                className="text-sm font-medium text-gray-700"
              >
                Image URL
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
                placeholder="Image URL"
              />
              <label
                htmlFor="stock"
                className="text-sm font-medium text-gray-700"
              >
                Stock
              </label>
              <input
                type="number"
                name="stock"
                value={formData.stock || ""}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
                placeholder="Stock"
              />

              <button
                onClick={handleSave}
                disabled={isUpdating}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center"
              >
                {isUpdating ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Saving...</span>
                  </div>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
