import React from "react";
import {
  LocalShipping,
  International,
  Warehouse,
  GapApproved,
} from "../UI/Icons/Icons";

const ProductFeatures = (props) => {
  return (
    <React.Fragment>
      {props.product.gap_approved ? (
        <span className="shop-card-product-features" title="Returns">
          <GapApproved />
          {props.showText ? (
            <span className="feature-text">Returns</span>
          ) : null}
        </span>
      ) : null}
      {props.product.fulfilled_by_gap ? (
        <span className="shop-card-product-features" title="Curb Side PickUp">
          <Warehouse />
          {props.showText ? (
            <span className="feature-text">Curb Side PickUp</span>
          ) : null}
        </span>
      ) : null}
    </React.Fragment>
  );
};

export default ProductFeatures;
