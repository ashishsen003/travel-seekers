import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = () => {
  const [searcParams, setSearchParams] = useSearchParams();
  const [order, setOrder] = useState(searcParams.get("order") || "");


  const handleSort = (e) => {
    setOrder(e.target.value);
    console.log(order)
  }

  useEffect(() => {
    const params = {}
    order && (params.order = order)
    setSearchParams(params);
  },[order]);

  return (
      <DIV>
        <div onChange={handleSort} style={{display:"flex"}} >
            <input 
            data-testid="sort-asc"   
            type="radio" 
            name="sort" 
            defaultChecked = { order === "asc" }
            value={"asc"} />
            <label>Low to High</label>
            <br />
            <input
            data-testid="sort-desc"
            type="radio"
            name="sort"
            value={"desc"}
            defaultChecked={order === "desc"}
            />
            <label>High to Low</label>
        </div>
      </DIV>
  );
};

const DIV = styled.div`
    margin: 20px 8px;
    div {
        display: flex;
        gap: 10px;
        color: var(--secondary-color);
        font-weight: 700;
    }
`
