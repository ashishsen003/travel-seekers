



import React from "react";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const arr = new Array(totalPages).fill(0);

  const paginationStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#1071DB",
    color: "white",
    padding: "5px 10px",
    border: "1px solid lightblue",
    margin: "5px",
    cursor: "pointer",
    width: '3rem',
    height: '3rem',
    borderRadius: '5px'
  };

  const activeButtonStyle = {
    backgroundColor: "#0C264C",
  };

  return (
    <div className="pagination_wrapper" style={paginationStyle}>
      {arr.map((el, i) => (
        <button
          key={i + 1}
          style={{
            ...buttonStyle,
            ...(i + 1 === currentPage ? activeButtonStyle : {}),
          }}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;


