import React, { useMemo, useEffect, useState } from "react";
import "./style.css";

const productsPerPage = 10;

export const Pagination = () => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await res.json();
    console.log("========>>>>>", data);
    if (data && data.products) {
      setData(data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  let { products = [], total, limit } = data;
  const totalPages = total / productsPerPage;

  const productToShow = useMemo(() => {
    return products.slice(page * totalPages - totalPages, page * totalPages);
  }, [page, products.length]);

  return (
    <div>
      {productToShow.length > 0 && (
        <div className="products">
          {productToShow.map((prod) => {
            return (
              <span className="products__single" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            );
          })}
        </div>
      )}

      <div className="pagination">
        <span
          onClick={() => selectPageHandler(page - 1)}
          className={page > 1 ? "" : "pagination__disable"}
        >
          ◀
        </span>
        {Array.from({ length: totalPages }).map((p, i) => {
          const idx = i + 1;
          const isSelected = idx === page;
          return (
            <span
              key={idx}
              onClick={() => {
                setPage(idx);
              }}
              className={`${isSelected ? "pagination__selected" : ""}`}
            >
              {idx}
            </span>
          );
        })}
        <span
          onClick={() => selectPageHandler(page + 1)}
          className={page < products.length / 10 ? "" : "pagination__disable"}
        >
          ▶
        </span>
      </div>
    </div>
  );
};

export default Pagination;
