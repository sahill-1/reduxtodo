import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, price, image, category, title } = product;
    return (
      <div
        className="four column wide"
        key={id}
        style={{
          width: "30%",
          margin: "auto",
          display: "flex",
          flex: "wrap",
          gap: "20px",
        }}
      >
        <Link to={`/product/${id}`}>
          {" "}
          <div style={{ width: "100%", margin: "auto" }}>
            <img
              src={image}
              alt={title}
              style={{ width: "100%", height: "250px" }}
            />
            <h4>{title}</h4>
            <p>{price}</p>
            <h5>{category}</h5>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
