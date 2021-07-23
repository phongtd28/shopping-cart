import React, { useState } from "react";
import { FilterSizeWrapper } from "./style";
import ButtonSize from "../commons/ButtonSize";
import { FaRegGrinStars } from "react-icons/fa";

const FilterSize = ({ handleSelectSize }) => {
  return (
    <FilterSizeWrapper>
      <h3>Size: </h3>
      <div className="group-size">
        <ButtonSize name="XS" value="XS" onClick={handleSelectSize} />
        <ButtonSize name="S" value="S" onClick={handleSelectSize} />
        <ButtonSize name="M" value="M" onClick={handleSelectSize} />
        <ButtonSize name="ML" value="ML" onClick={handleSelectSize} />
        <ButtonSize name="L" value="L" onClick={handleSelectSize} />
        <ButtonSize name="XL" value="XL" onClick={handleSelectSize} />
        <ButtonSize name="XXL" value="XXL" onClick={handleSelectSize} />
      </div>
      <small>Leave a star on Github if this repository was useful</small>
      <div className="group-btn">
        <span className="btn-star" onClick={null}>
          <FaRegGrinStars style={{ margin: "0 5px" }} />
          star
        </span>
        <span className="btn-count" onClick={null}>
          2802
        </span>
      </div>
    </FilterSizeWrapper>
  );
};

export default FilterSize;
