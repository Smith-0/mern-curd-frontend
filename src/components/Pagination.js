import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Pagination = () => {
  const notes = useSelector((state) => state.notes);
  const total_pages = Math.ceil(notes.length / 3);

  let query = useQuery();
  let current_page = parseInt(query.get("page")) || 1;

  let pages = [];
  for (let i = 1; i <= total_pages; i++) {
    pages.push(i);
  }

  const page_no_UI = pages.map((note, index) => (
    <li className="page-item">
      <Link
        className={`page-link ${current_page === index + 1 && "active"}`}
        to={`/?page=${index + 1}`}
      >
        {index + 1}
      </Link>
    </li>
  ));

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <Link
              className="page-link"
              to={current_page !== 1 && `/?page=${current_page - 1}`}
              style={{ cursor: current_page === 1 && "no-drop" }}
              aria-label="Previous"
              disabled
            >
              <span aria-hidden="true">&laquo;</span>
            </Link>
          </li>

          {page_no_UI}

          <li className="page-item">
            <Link
              className="page-link"
              to={
                current_page < total_pages
                  ? `/?page=${current_page + 1}`
                  : `/?page=${total_pages}`
              }
              style={{ cursor: current_page === total_pages && "no-drop" }}
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
