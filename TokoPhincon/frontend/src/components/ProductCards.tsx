import { Link } from 'react-router-dom';
import { ProductType } from '../types/product.type';

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
        <div className="h-48 bg-gray-200 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
          <div className="flex justify-between items-center">
            <span className="font-bold text-blue-600">Rp.{product.price.toFixed(2)}</span>
            <span className="text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded-full">
              {product.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;