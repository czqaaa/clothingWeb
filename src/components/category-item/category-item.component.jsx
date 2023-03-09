import "./category-item.styles.scss";
import { useNavigate } from "react-router-dom";

const CategoryItem = (props) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(props.category.route);

  return (
    <div
      key={props.category.id}
      className="category-container"
      onClick={onNavigateHandler}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${props.category.imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{props.category.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
export default CategoryItem;
