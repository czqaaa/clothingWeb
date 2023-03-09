import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect, Fragment } from "react";
import { ProductContext } from "../../contexts/product.context";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { products } = useContext(ProductContext);
  const [pro, setPro] = useState(products[category]);

  useEffect(() => {
    setPro(products[category]);
  }, [category, products]);

  return (
    <Fragment>
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="cate-container">
        {pro &&
          pro.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};
export default Category;
