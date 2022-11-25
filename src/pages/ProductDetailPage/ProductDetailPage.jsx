import { useLocation } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

const ProductDetailPage = () => {
  const location = useLocation();

  return <ProductDetail locationData={location} />;
};

export default ProductDetailPage;
